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
import Transport from '../svg/transport.svg';

import { insurances } from '../utils/insurances';

const AsigurareDeTransport = () => {
  const steps = insurances[5].steps;
  return (
    <>
      <PageHead
        title="asigurari de acasa - Asigurare de transport"
        description="Asigurari de transport"
        keywords="RCA, rca, asigurari de transport"
      />

      {/* HERO
    ----------------------*/}
      <Hero
        title="Asigurare de transport"
        subtitle="Siguranta marfurilor consolideaza parteneriatele! "
      >
        <Transport />
      </Hero>
      <Flex width="100%" align="center" justify="flex-start">
        <Text mb="50px" width="50%">
          Asigurarea de raspundere a transportatorului, in calitate de caraus,
          pentru marfurile transportate cu vehicule, vizeaza transporturile
          rutiere de marfa, cu vehicule inmatriculate in Romania, in baza unor
          contracte de transport.
        </Text>
      </Flex>

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

export default AsigurareDeTransport;
