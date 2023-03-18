import { Card } from '@nextui-org/react';
import { LoadingLayout } from '../components/LoadingLayout';
import { PageTitle } from '../components/PageTitle';
import { useGetGalleryMedia } from '../hooks/api/gallery';
import { NextPage } from 'next';

const Gallery: NextPage = (): JSX.Element => {
  const { isLoading, data: galleryQueryData } = useGetGalleryMedia();

  if (isLoading) {
    return <LoadingLayout />;
  }

  return (
    <>
      <PageTitle name={'Gallery'} fontSize={60} />
      <div className="md:grid md:grid-cols-3 md:px-20 md:gap-3 grid-cols-1 pb-4">
        {galleryQueryData
          ?.sort((currentObj, nextObj) => {
            return nextObj.id - currentObj.id;
          })
          ?.map((media) => {
            const containsVideo = media.mediaType.includes('video');
            if (!containsVideo) {
              return (
                <div
                  key={media.id}
                  className="md:px-2 px-8 py-4 h-full sm:min-h-[320px]"
                >
                  <Card className="border-none align-top " isHoverable>
                    <Card.Body className="p-0">
                      <Card.Image
                        css={{
                          height: '450px',
                          width: '100%',
                          background: 'Gray',
                          aspectRatio: '16/9',
                          objectFit: 'cover',
                        }}
                        src={media.mediaUrl}
                        alt={media.mediaName}
                      />
                    </Card.Body>
                  </Card>
                </div>
              );
            }
            return (
              <div
                key={media.id}
                className="md:px-2 px-8 py-4 h-full min-h-[320px]"
              >
                <Card className="border-none align-top" isHoverable>
                  <Card.Body className="p-0">
                    <video
                      controls
                      autoPlay
                      loop
                      muted
                      style={{
                        height: '450px',
                        width: '100%',
                        background: 'Gray',
                        objectFit: 'cover',
                      }}
                    >
                      <source src={media.mediaUrl} type={media.mediaType} />
                    </video>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Gallery;
