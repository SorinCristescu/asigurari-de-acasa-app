import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import theme from '../css/theme';
import * as gtag from '../utils/gtag';
import { AuthProvider } from '../context/AuthContext';

import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <AuthProvider>
      <ChakraProvider resetCSS theme={theme}>
        <ColorModeProvider
          options={{
            useSystemColorMode: true,
          }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ColorModeProvider>
      </ChakraProvider>
    </AuthProvider>
  );
}

export default MyApp;
