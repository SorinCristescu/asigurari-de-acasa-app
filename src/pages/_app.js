import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import theme from '../css/theme';
import * as gtag from '../utils/gtag';
import dynamic from 'next/dynamic';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false,
});

import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {
  const [pointer, setPointer] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events, pointer]);

  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        {pointer ? (
          <AnimatedCursor
            innerSize={8}
            outerSize={20}
            color="77, 77, 255"
            outerAlpha={0.2}
            innerScale={0.5}
            outerScale={3}
          />
        ) : null}

        <Layout setPointer={setPointer}>
          <Component {...pageProps} />
        </Layout>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
