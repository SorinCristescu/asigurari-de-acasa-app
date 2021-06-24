import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useRouter } from 'next/router';
import PageHead from '../components/layout/PageHead';
import { Flex, Text, Heading, Box, Wrap, WrapItem } from '@chakra-ui/react';
import SigninForm from '../components/ui/SigninForm';

const Signin = () => {
  const router = useRouter();
  return (
    <>
      <PageHead title="asigurari de acasa - Despre noi" />
      <Flex
        py="100px"
        direction="column"
        w="100%"
        h="100vh"
        align="center"
        justify="center"
      >
        <Heading
          as="h3"
          mb="30px"
          fontSize={{ base: '32px', sm: '32px', md: '48px', lg: '48px' }}
        >
          Login
        </Heading>
        <SigninForm />
      </Flex>
    </>
  );
};

export default Signin;
