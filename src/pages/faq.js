import React from 'react';
import PageHead from '../components/layout/PageHead';
import {
  Flex,
  Spacer,
  Center,
  Text,
  Heading,
  Box,
  Button,
} from '@chakra-ui/react';
const FAQ = () => {
  return (
    <>
      <PageHead title="asigurari de acasa - Despre noi" />

      <Flex
        pt="100px"
        direction="row"
        w="100%"
        h="60vh"
        align="flex-start"
        justify="center"
      ></Flex>
      <Heading as="h3" fontSize="48px" mb="30px" noOfLines={2}>
        Intrebari si raspunsuri frecvente
      </Heading>
    </>
  );
};

export default FAQ;
