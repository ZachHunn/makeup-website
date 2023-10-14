import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import React, { useState } from 'react';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import { Navigation } from '../components/Navigation';

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <>
      <Head>
        <title>Makeup By J&apos;Victoria</title>
        <meta name="description" content="Makeup By J'Victoria Website" />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Navigation />
          <Component {...pageProps} />
          <Analytics />
        </Hydrate>
      </QueryClientProvider>
    </>
  );
};

export default App;
