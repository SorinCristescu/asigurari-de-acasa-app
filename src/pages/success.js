import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import gsap from 'gsap';
import Confetti from 'react-confetti';
import { Flex, Button, Heading, Text } from '@chakra-ui/react';

const Success = () => {
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const buttonRef = useRef(null);

  const [width, setWidth] = useState(1000);
  const [height, setHeight] = useState(800);
  const router = useRouter();

  useEffect(() => {
    if (window) {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    } else {
      return;
    }

    gsap.fromTo(
      [
        subtitleRef.current,
        titleRef.current,
        text1Ref.current,
        text2Ref.current,
        buttonRef.current,
      ],
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
  }, [width, height, subtitleRef, titleRef, text1Ref, text2Ref, buttonRef]);

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      w="100%"
      h="100vh"
      pt="100"
    >
      <Confetti width={width} height={height} />
      <Heading
        ref={titleRef}
        width="full"
        textAlign="center"
        fontSize="48px"
        mb="20px"
      >
        Felicitari!!
      </Heading>
      <Heading
        ref={subtitleRef}
        width="full"
        textAlign="center"
        mb="20px"
        fontSize="32px"
      >
        Solicitarea de oferta a fost trimisa cu succes
      </Heading>
      <Text
        ref={text1Ref}
        width="full"
        textAlign="center"
        mb="10px"
        fontSize="18px"
      >
        In scurt timp vei fi contactat de un reprezentant al companiei.
      </Text>
      <Text
        ref={text2Ref}
        width="full"
        textAlign="center"
        mb="50px"
        fontSize="18px"
      >
        Pana atunci va dorim navigare placuta pe websitul nostru!
      </Text>
      <Button
        ref={buttonRef}
        w="182px"
        h="50px"
        variant="solid"
        size="lg"
        bg="#4D4DFF"
        color="#FFF9F2"
        _hover={{ bg: '#3333FF', color: '#FFF9F2' }}
        fontSize="18px"
        borderRadius="0"
        onClick={() => router.push(`/`)}
      >
        Continua navigarea
      </Button>
    </Flex>
  );
};

export default Success;
