import React from 'react';
import { MediaInformation } from '../../types/mediaTypes';
import Image from 'next/image';

type MediaCarouselModalProps = {
  media: MediaInformation;
  isOpen: boolean;
  handleClose: () => void;
};
export const MediaCarouselModal: React.FC<MediaCarouselModalProps> = ({
  media,
  isOpen,
  handleClose,
}) => {
  const isVideo = media.mediaType.includes('video');

  return (
    <div
      className={`fixed flex inset-0 items-center justify-center z-50 w-full md:px-16 h-screen px-4 ${
        isOpen ? '' : 'hidden'
      }`}
    >
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white rounded-lg shadow-lg z-10 max-w-[44rem] relative">
        {!isVideo ? (
          <Image
            className="w-full h-screen object-fill rounded-lg aspect-video bg-gray-200"
            src={media.mediaUrl}
            alt={media.mediaAlt}
            loading="eager"
            width={500}
            height={500}
          />
        ) : (
          <video
            className="w-full h-screen object-fill rounded-lg aspect-video"
            autoPlay
            loop
            muted
          >
            <source src={media.mediaUrl} type={media.mediaType} />
          </video>
        )}
        <button className=" absolute top-2 right-0 w-12" onClick={handleClose}>
          <span className="mt-4 py-1 px-2.5 rounded-full text-black bg-white bg-opacity-40 text-2xl hover:text-white mx-auto">
            X
          </span>
        </button>
      </div>
    </div>
  );
};
