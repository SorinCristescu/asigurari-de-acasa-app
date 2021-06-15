import PageHead from '../components/layout/PageHead';
import Hero from '../components/ui/Hero';
import MailchimpForm from '../components/ui/MailchimpForm';
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

const AsigurareDeSanatate = () => {
  const steps = insurances[4].steps;
  return (
    <>
      <PageHead title="asigurari de acasa - Asigurare de sanatate" />

      {/* HERO
    ----------------------*/}
      <Hero
        title="Asigurare de sanatate"
        subtitle="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
      />

      {/* STEPS 
    ----------------------*/}
      <Steps steps={steps} />

      {/* FORM 
    ----------------------*/}
      <Center id="form" w="100%" h="100vh">
        <MailchimpForm />
      </Center>
    </>
  );
};

export default AsigurareDeSanatate;
