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
  const [mousePointer, setMousePointer] = useState(false);
  const router = useRouter();
  console.log(mousePointer);

  const handleMousePointer = () => {
    localStorage.setItem('mouse-pointer', mousePointer);
    setMousePointer(localStorage.getItem('mouse-pointer'));
  };

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events, mousePointer]);

  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        {mousePointer ? (
          <AnimatedCursor
            innerSize={10}
            outerSize={20}
            color="77, 77, 255"
            outerAlpha={0.2}
            innerScale={1}
            outerScale={2}
          />
        ) : null}

        <Layout setMousePointer={handleMousePointer}>
          <Component {...pageProps} />
        </Layout>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
