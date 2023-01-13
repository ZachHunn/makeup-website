import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import React, { useState } from 'react';
import { SSRProvider } from '@react-aria/ssr';
import { NavBar } from '../components/Navbar';

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <SSRProvider>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <NextUIProvider>
            <NavBar />
            <Component {...pageProps} />
          </NextUIProvider>
        </Hydrate>
      </QueryClientProvider>
    </SSRProvider>
  );
};

export default App;
