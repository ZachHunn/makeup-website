import Head from 'next/head';
// import styles from '../styles/Home.module.css';
import { Card, Grid, Loading } from '@nextui-org/react';
import { useState } from 'react';
import { NavBar } from '../components/Navbar';
import { useGetGalleryImages } from './hooks/api/gallery';

export default function Home() {
  const { isLoading, data: galleryQueryData } = useGetGalleryImages();

  if (isLoading) {
    return (
      <Loading
        css={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
        size="xl"
        type="gradient"
      >
        Loading
      </Loading>
    );
  }
  console.log(galleryQueryData);
  return (
    <div>
      <Head>
        <title>Makeup By J&apos;Victoria</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <header>
        <NavBar />
      </header>

      <main>
        <h1>Gallery</h1>
        <Grid.Container gap={2} justify="center">
          {galleryQueryData?.map((media) => {
            const containsVideo = media.media_url.includes('video');
            if (!containsVideo) {
              return (
                <Grid key={media.id}>
                  <Card isHoverable isPressable>
                    <Card.Body css={{ p: 0 }}>
                      <Card.Image
                        css={{ height: '100%' }}
                        objectFit="cover"
                        width={200}
                        src={media.media_url}
                        alt=""
                      />
                    </Card.Body>
                  </Card>
                </Grid>
              );
            } else {
              return (
                <Grid key={media.id}>
                  <Card isHoverable isPressable>
                    <Card.Body css={{ p: 0 }}>
                      <video
                        width="200"
                        height="355"
                        src={media.media_url}
                        loop
                        muted
                      />
                    </Card.Body>
                  </Card>
                </Grid>
              );
            }
          })}
        </Grid.Container>
      </main>
    </div>
  );
}
