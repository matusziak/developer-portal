import clsx from 'clsx';
import React from 'react';
import { formatDistance } from 'date-fns';
import { RightChevronIcon, TimeIcon } from '../icons';

export type AnnouncementCardProps = {
  sourceIcon: string;
  sourceAltText: string;
  heading: string;
  timestamp: Date;
  link: string;
}

const AnnouncementCard = ({ heading, sourceIcon, sourceAltText, timestamp, link }: AnnouncementCardProps) => {
  return (
    <div className="bg-white rounded-2xl flex items-center py-4 px-8 justify-between dark:bg-gray-800 sm:px-4 sm:items-start">
      <div className="mr-4 sm:mr-1">
        <img src={sourceIcon} alt={sourceAltText} width={50} height="auto" className="mr-4 rounded-full" />
      </div>
      <div className="flex-1">
        <h2 className="font-bold text-2xl sm:text-xl">{heading}</h2>
        <div className="flex text-primary-gray-300 items-center">
          <TimeIcon />
          <span className="ml-2">{formatDistance(timestamp, new Date())} ago</span>
        </div>
      </div>
      <a href={link} className="md:mt-0 lg:mt-0 sm:mt-16"><RightChevronIcon /></a>
    </div>
  )
}

export default AnnouncementCard;