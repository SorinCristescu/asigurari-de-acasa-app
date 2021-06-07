import PageHead from '../components/layout/PageHead';
import Hero from '../components/ui/Hero';
import Form from '../components/ui/Form';
import Steps from '../components/ui/Steps';
import {
  Flex,
  Spacer,
  Center,
  Text,
  Heading,
  Box,
  Button,
} from '@chakra-ui/react';

import { insurances } from '../utils/insurances';

const AsigurareDeTransport = () => {
  const steps = insurances[5].steps;
  return (
    <>
      <PageHead title="asigurari de acasa - Asigurare de transport" />

      {/* HERO
    ----------------------*/}
      <Hero
        title="Asigurare de transport"
        subtitle="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
      />

      {/* STEPS 
    ----------------------*/}
      <Steps steps={steps} />

      {/* FORM 
    ----------------------*/}
      <Center w="100%" h="100vh">
        <Form />
      </Center>
    </>
  );
};

export default AsigurareDeTransport;
