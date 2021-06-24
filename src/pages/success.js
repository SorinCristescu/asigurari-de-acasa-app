import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Confetti from 'react-confetti';
import { Flex, Button, Heading, Text } from '@chakra-ui/react';

const Success = () => {
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
  }, [width, height]);
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
      <Heading width="full" textAlign="center" fontSize="48px">
        Felicitari!!
      </Heading>
      <Heading width="full" textAlign="center" mb="20px" fontSize="32px">
        Solicitarea de oferta a fost trimisa cu succes
      </Heading>
      <Text width="full" textAlign="center" mb="10px" fontSize="18px">
        In scurt timp vei fi contactat de un reprezentant al companiei.
      </Text>
      <Text width="full" textAlign="center" mb="50px" fontSize="18px">
        Pana atunci va dorim navigare placuta pe websitul nostru!
      </Text>
      <Button
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
