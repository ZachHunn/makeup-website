import { Card } from '@nextui-org/react';
import Head from 'next/head';
import { LoadingLayout } from '../components/LoadingLayout';
import { PageTitle } from '../components/PageTitle';
import { useGetGalleryMedia } from '../hooks/api/gallery';

export default function Home() {
  const { isLoading, data: galleryQueryData } = useGetGalleryMedia();

  if (isLoading) {
    return <LoadingLayout />;
  }

  return (
    <>
      <Head>
        <title>Makeup By J&apos;Victoria</title>
        <meta name="description" content="Makeup By J'Victoria Website" />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <PageTitle name={'Portfolio'} fontSize={60} />
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
                        className="h-[450px] w-full"
                        objectFit="fill"
                        src={media.mediaUrl}
                        alt={media.mediaName}
                        loading="lazy"
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
                      className="h-[450px] w-full object-fill"
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
}
