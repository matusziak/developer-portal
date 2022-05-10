// @ts-expect-error
import redis from "redis";

import { getRequiredServerEnvVar } from "./helpers";

declare global {
  // This prevents us from making multiple connections to the db when the
  // require cache is cleared.
  // eslint-disable-next-line
  var replicaClient: redis.RedisClient | undefined,
    primaryClient: redis.RedisClient | undefined;
}

const REDIS_URL = getRequiredServerEnvVar("REDIS_URL");

const replica = new URL(REDIS_URL);

const isInternal = replica.hostname.includes(".internal");

let primaryClient: redis.RedisClient | null = null;

const primary = new URL(REDIS_URL);

primaryClient = createClient("primaryClient", {
  url: primary.toString(),
  family: isInternal ? "IPv6" : "IPv4",
});

function createClient(
  name: "replicaClient" | "primaryClient",
  options: redis.ClientOpts
): redis.RedisClient {
  let client = global[name];
  if (!client) {
    const url = new URL(options.url ?? "http://no-redis-url.example.com?weird");
    console.log(`Setting up redis client to ${url.host} for ${name}`);
    // eslint-disable-next-line no-multi-assign
    client = global[name] = redis.createClient(options);

    client.on("error", (error: string) => {
      console.error(`REDIS ${name} (${url.host}) ERROR:`, error);
    });
  }
  return client;
}

// NOTE: Caching should never crash the app, so instead of rejecting all these
// promises, we'll just resolve things with null and log the error.

function get<Value = unknown>(key: string): Promise<Value | null> {
  return new Promise((resolve) => {
    primaryClient.get(key, (err: Error | null, result: string | null) => {
      if (err) {
        console.error(`REDIS ERROR with .get:`, err);
      }
      resolve(result ? (JSON.parse(result) as Value) : null);
    });
  });
}

function set<Value>(key: string, value: Value): Promise<"OK"> {
  return new Promise((resolve) => {
    primaryClient.set(
      key,
      JSON.stringify(value),
      (err: Error | null, reply: "OK") => {
        if (err) console.error(`REDIS ERROR with .set:`, err);
        resolve(reply);
      }
    );
  });
}

function del(key: string): Promise<string> {
  return new Promise((resolve) => {
    primaryClient.del(key, (err: Error | null, result: number | null) => {
      if (err) {
        console.error(`REDIS ERROR with .del:`, err);
        resolve("error");
      } else {
        resolve(`${key} deleted: ${result}`);
      }
    });
  });
}

const redisCache = { get, set, del, name: "redis" };
export { get, set, del, redisCache };
