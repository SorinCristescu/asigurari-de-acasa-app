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
import PAD from '../svg/pad.svg';

import { insurances } from '../utils/insurances';

const AsigurarePAD = () => {
  const steps = insurances[2].steps;
  return (
    <>
      <PageHead
        title="asigurari de acasa - Asigurare PAD"
        description="Asigurari RCA"
        keywords="RCA, rca, asigurari RCA"
      />

      {/* HERO
    ----------------------*/}
      <Hero
        title="Asigurare PAD"
        subtitle="Atat de necesara in cazul dezastrelor naturale!"
      >
        <PAD />
      </Hero>
      <Flex width="100%" align="center" justify="flex-start">
        <Text mb="50px" width="50%">
          PAD este polita de asigurare impotriva dezastrelor naturale, o polita
          de asigurare obligatorie care acopera daunele produse de cutremure,
          inundatii sau alunecari de teren ca fenomene naturale asupra
          locuintelor.
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

export default AsigurarePAD;
