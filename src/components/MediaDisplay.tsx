import React from 'react';
import { Gallery } from '@prisma/client';

type MediaProps = {
  mediaInfo: Gallery[] | undefined;
};

export const MediaDisplay: React.FC<MediaProps> = ({ mediaInfo }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 lg:px-24 gap-6 py-6 md:px-16 px-6">
      {mediaInfo
        ?.sort((currentObj, nextObj) => {
          return nextObj.id - currentObj.id;
        })
        ?.map((media) => {
          return media.mediaType.includes('image') === true ? (
            <div key={media.id}>
              <img
                className="max-w-full max-h-3/4 aspect-video bg-gray-100 object-fill rounded-md mb-2 md:h-[30rem] h-80 hover:cursor-pointer hover:scale-110 touch-auto"
                src={media.mediaUrl}
                alt={media.mediaName}
                loading="lazy"
              />
            </div>
          ) : (
            <div key={media.id}>
              <video
                className="max-w-full max-h-3/4 object-fill mb-2 rounded-md md:h-[30rem] h-80 hover:cursor-pointer hover:scale-110 touch-auto"
                loop
                muted
              >
                <source src={media.mediaUrl} type={media.mediaType} />
              </video>
            </div>
          );
        })}
    </div>
  );
};
