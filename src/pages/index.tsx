import Head from 'next/head';
import { Card, Grid, Loading, Text } from '@nextui-org/react';
import { NavBar } from '../components/Navbar';
import { useGetGalleryMedia } from './hooks/api/gallery';

export default function Home() {
  const { isLoading, data: galleryQueryData } = useGetGalleryMedia();

  if (isLoading) {
    return (
      <Loading
        css={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          position: 'relative',
        }}
        size="xl"
        type="gradient"
      >
        Loading
      </Loading>
    );
  }

  return (
    <div>
      <Head>
        <title>Makeup By J&apos;Victoria</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <main>
        <Text h1 css={{ paddingLeft: '25px' }} size={60}>
          Portfolio
        </Text>
        <Grid.Container gap={3} justify="center">
          {galleryQueryData?.map((media) => {
            const containsVideo = media.mediaType.includes('video');
            if (!containsVideo) {
              return (
                <Grid key={media.id}>
                  <Card css={{ height: 'fit-content' }} isHoverable isPressable>
                    <Card.Body css={{ p: 0, border: 'none' }}>
                      <Card.Image
                        css={{ height: '281px' }}
                        objectFit="cover"
                        width={500}
                        src={media.mediaUrl}
                        alt={media.mediaName}
                      />
                    </Card.Body>
                  </Card>
                </Grid>
              );
            }
            return (
              <Grid key={media.id}>
                <Card css={{ height: 'fit-content' }} isHoverable isPressable>
                  <Card.Body css={{ p: 0, border: 'none' }}>
                    <video
                      autoPlay
                      loop
                      muted
                      style={{ width: '500px', height: '100%' }}
                    >
                      <source
                        src={media.mediaUrl}
                        type={media.mediaType}
                        about={media.mediaName}
                      />
                    </video>
                  </Card.Body>
                </Card>
              </Grid>
            );
          })}
        </Grid.Container>
      </main>
    </div>
  );
}
