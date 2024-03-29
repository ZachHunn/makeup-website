import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import React, { useState } from 'react';
import { SSRProvider } from '@react-aria/ssr';
import { NavBar } from '../components/Navbar';
import { SnackbarProvider } from 'notistack';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <>
      <Head>
        <title>Makeup By J&apos;Victoria</title>
        <meta name="description" content="Makeup By J'Victoria Website" />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <SSRProvider>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <NextUIProvider>
              <SnackbarProvider
                maxSnack={3}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <NavBar />
                <Component {...pageProps} />
                <Analytics />
              </SnackbarProvider>
            </NextUIProvider>
          </Hydrate>
        </QueryClientProvider>
      </SSRProvider>
    </>
  );
};

export default App;
