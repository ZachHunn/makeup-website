import React, { useState } from 'react';
import { Gallery } from '@prisma/client';
import { MediaInformation } from '../../types/mediaTypes';
import Image from 'next/image';
type MediaProps = {
  mediaInfo: Gallery[] | undefined;
};

export const MediaDisplay: React.FC<MediaProps> = ({ mediaInfo }) => {
  const [mediaInformation, setMediaInformation] = useState<MediaInformation>({
    mediaUrl: '',
    mediaAlt: '',
    mediaType: '',
  });
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleClose = () => {
    setShowModal((previousModalState) => !previousModalState);
    setMediaInformation({
      ...mediaInformation,
      mediaUrl: '',
      mediaType: '',
      mediaAlt: '',
    });
  };

  const handleMediaClick = (
    mediaUrl: string,
    mediaAlt: string,
    mediaType: string,
  ) => {
    setMediaInformation({
      ...mediaInformation,
      mediaUrl: mediaUrl,
      mediaAlt: mediaAlt,
      mediaType: mediaType,
    });
    setShowModal((prev) => !prev);
  };
  return (
    <div className="flex flex-row flex-wrap gap-6 justify-center">
      {mediaInfo
        ?.sort((currentObj, nextObj) => {
          return nextObj.id - currentObj.id;
        })
        ?.map((media) => {
          return media.mediaType.includes('image') === true ? (
            <div
              key={media.id}
              onClick={() =>
                handleMediaClick(
                  media.mediaUrl,
                  media.mediaName,
                  media.mediaType,
                )
              }
            >
              <Image
                className="w-96 md:max-h-3/4 aspect-video bg-gray-100 object-fill rounded-md mb-2 h-[30rem] hover:cursor-pointer md:hover:scale-110 touch-auto"
                src={media.mediaUrl}
                alt={media.mediaName}
                loading="lazy"
                unoptimized
                width={300}
                height={750}
                quality={100}
              />
            </div>
          ) : (
            <div
              key={media.id}
              onClick={() =>
                handleMediaClick(
                  media.mediaUrl,
                  media.mediaName,
                  media.mediaType,
                )
              }
            >
              <video
                className="w-96 md:max-h-3/4 object-fill mb-2 rounded-md h-[30rem] hover:cursor-pointer md:hover:scale-110 touch-auto"
                loop
                muted
                controls
                autoPlay
                preload='auto'
                playsInline
              >
                <source src={media.mediaUrl} type={media.mediaType} />
                  Your browser does not support this video.
              </video>
            </div>
          );
        })}
  
    </div>
  );
};
