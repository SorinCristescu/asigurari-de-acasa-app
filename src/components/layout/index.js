import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import {
  Flex,
  useColorMode,
  useDisclosure,
  Slide,
  ScaleFade,
} from '@chakra-ui/react';
import Main from './Main';
import Footer from './Footer';
import Header from './Header';
import Menu from './Menu';
import GDPR from './CookieConsent';
import dynamic from 'next/dynamic';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false,
});

const Layout = (props) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: 'gray.50', dark: 'gray.900' };
  const color = { light: 'black', dark: 'white' };

  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <Flex
      direction="column"
      alignItems="center"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      position="relative"
      {...props}
    >
      <AnimatedCursor
        innerSize={8}
        outerSize={20}
        color="77, 77, 255"
        outerAlpha={0.2}
        innerScale={0.5}
        outerScale={3}
      />
      <Header onToggle={onToggle} isMenuOpen={isOpen} onClose={onClose} />

      <Slide in={isOpen} style={{ zIndex: 10 }}>
        <Menu
          color={color}
          bgColor={bgColor}
          colorMode={colorMode}
          onToggle={onToggle}
        />
      </Slide>
      <Main>{props.children}</Main>
      <Footer />
      <GDPR />
    </Flex>
  );
};

export default Layout;
