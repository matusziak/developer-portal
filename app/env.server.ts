function getEnv() {
  return {
    NODE_ENV: process.env.NODE_ENV,
    SENTRY_DSN: process.env.SENTRY_DSN,
    BOT_GITHUB_TOKEN: process.env.BOT_GITHUB_TOKEN,
    SESSION_SECRET: process.env.SESSION_SECRET,
    DATABASE_URL: process.env.DATABASE_URL,
    REDIS_URL: process.env.REDIS_URL,
    REDIS_CA: process.env.REDIS_CA,
    REFRESH_CACHE_SECRET: process.env.REFRESH_CACHE_SECRET,
    STATUSPAGE_API_KEY: process.env.STATUSPAGE_API_KEY,
  }
}

type ENV = ReturnType<typeof getEnv>

// App puts these on
declare global {
  // eslint-disable-next-line
  var ENV: ENV
  interface Window {
    ENV: ENV
  }
}

export { getEnv }
