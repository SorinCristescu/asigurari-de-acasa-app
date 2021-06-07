import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

import {
  Flex,
  Spacer,
  Center,
  Text,
  Heading,
  Box,
  Button,
} from '@chakra-ui/react';

const Hero = ({ title, subtitle }) => {
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [titleRef.current, subtitleRef.current, ctaRef.current],
      {
        y: '20px',
        opacity: 0,
      },
      {
        duration: 1,
        y: '0px',
        opacity: 1,
        ease: 'power3.inOut',
        stagger: {
          amount: 0.5,
        },
      }
    );
  }, [titleRef, subtitleRef, ctaRef]);

  return (
    <Flex
      direction="row"
      wrapw
      w="full"
      h="100vh"
      align="center"
      justify="flex-start"
    >
      <Box w="50%">
        <Heading
          ref={titleRef}
          as="h1"
          fontSize="100px"
          mb="30px"
          noOfLines={2}
        >
          {title}
        </Heading>
        <Text ref={subtitleRef} mb="50px" fontSize="lg" noOfLines={2}>
          {subtitle}
        </Text>
        <Button
          ref={ctaRef}
          w="182px"
          h="50px"
          variant="solid"
          size="lg"
          bg="#4D4DFF"
          color="#FFF9F2"
          borderRadius="0"
          fontSize="18px"
        >
          Solicita oferta
        </Button>
      </Box>
      <Box w="50%"></Box>
    </Flex>
  );
};

export default Hero;
