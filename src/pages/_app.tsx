import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import React, { useState } from 'react';
import { SSRProvider } from '@react-aria/ssr';
import { NavBar } from '../components/Navbar';
import { SnackbarProvider } from 'notistack';

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
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
            </SnackbarProvider>
          </NextUIProvider>
        </Hydrate>
      </QueryClientProvider>
    </SSRProvider>
  );
};

export default App;
