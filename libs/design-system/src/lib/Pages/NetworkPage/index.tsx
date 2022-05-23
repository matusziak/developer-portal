import React from "react";
import { startOfDay } from 'date-fns';
import { NetworkCard, AnnouncementCard, Footer } from "../../Components";
import { StatuspageApiResponse } from "../../interfaces";
// @ts-ignore
import data from './sample';

const NetworkPage = () => {
  return (
    <div>
      <div className="flex-col">
        <h1 className="text-h1">
          Network status
        </h1>

        <div className="flex-col mt-12">
          {data.map(({ name, status }: StatuspageApiResponse) => {
            return (<div className="py-6">
              <NetworkCard
                networkName={name}
                status={status === "operational" ? "Healthy" : "Under Maintenance"}
                version="33"
                lastSporkDate="April, 2022"
                nextSporkDate="April, 2022"
                link="https://google.com" /></div>)
          })}
        </div>
        <div style={{ height: '100px' }}></div>

        <h3 className="text-h3">
          Live updates
        </h3>
        <div style={{ height: '260px' }}></div>

        <h3 className="text-h3">
          Announcements
        </h3>
        <div className="flex-col">
          {[1, 2, 3].map(() => (
            <div className="py-6">
              <AnnouncementCard sourceIcon='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
                sourceAltText='Github'
                heading='Holy shit Github is down'
                timestamp={startOfDay(new Date())}
                link='https://google.com' />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
};

export default NetworkPage;
