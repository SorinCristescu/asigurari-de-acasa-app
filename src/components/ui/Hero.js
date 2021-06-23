import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

import { Flex, Center, Text, Heading, Box, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const Hero = ({ title, subtitle, children }) => {
  const router = useRouter();
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);
  const ctaRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [titleRef.current, subtitleRef.current, ctaRef.current, imageRef.current],
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
  }, [titleRef, subtitleRef, ctaRef, imageRef]);

  return (
    <Flex
      flexWrap="wrap"
      w="full"
      minHeight="100vh"
      align="center"
      justify="flex-start"
      pt={{ base: '100px', sm: '100px', md: '0px', lg: '0px' }}
    >
      <Box w={{ base: '100%', sm: '100%', md: '50%', lg: '50%' }}>
        <Heading
          ref={titleRef}
          as="h1"
          fontSize={{
            base: '50px',
            sm: '50px',
            md: '90px',
            lg: '100px',
            xl: '100px',
          }}
          mb="30px"
          noOfLines={3}
        >
          {title}
        </Heading>
        <Text ref={subtitleRef} mb="50px" fontSize="24px" noOfLines={8}>
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
          _hover={{ bg: '#3333FF', color: '#FFF9F2' }}
          fontSize="18px"
          borderRadius="0"
          onClick={() => router.push(`${router.pathname}#form`)}
        >
          Solicita oferta
        </Button>
      </Box>
      <Center ref={imageRef} w={{ base: '100%', md: '50%', lg: '50%' }}>
        <Center>{children}</Center>
      </Center>
    </Flex>
  );
};

export default Hero;
