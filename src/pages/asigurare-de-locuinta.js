import PageHead from '../components/layout/PageHead';
import Hero from '../components/ui/Hero';
import MailchimpForm from '../components/ui/MailchimpForm';
import Steps from '../components/ui/Steps';
import { Flex, Text, Heading } from '@chakra-ui/react';
import Locuinta from '../svg/locuinta.svg';
import { insurances } from '../utils/insurances';

const AsigurareDeLocuinta = () => {
  const steps = insurances[2].steps;
  const insuranceName = insurances[2].title;
  return (
    <>
      <PageHead
        title="asigurari de acasa - Asigurare de locuinta"
        description="Asigurari de locuinta"
        keywords="RCA, rca, asigurari de locuinta"
      />

      {/* HERO
    ----------------------*/}
      <Hero
        title="Asigurare de locuinta"
        subtitle="O mica investitie, un mare avantaj!"
      >
        <Locuinta />
      </Hero>
      <Flex width="100%" align="center" justify="flex-start" mt="50px">
        <Text width={{ base: '100%', md: '100%', lg: '70%' }}>
          Aceasta asigurare facultativa vine in completarea asigurarii
          obligatorii PAD, prin acoperirea mai multor riscuri precum si ca
          excedent de suma asigurata pe cele 3 riscuri acoperite de PAD.
        </Text>
      </Flex>
      {/* STEPS 
    ----------------------*/}
      <Heading
        mt="100px"
        as="h2"
        fontSize={{ base: '32px', sm: '32px', md: '48px', lg: '48px' }}
        noOfLines={6}
        align="left"
        w={{ base: '100%', sm: '100%', md: '100%', lg: '100%' }}
      >
        Doar {steps.length} pasi pentru obtinerea de {insuranceName}
      </Heading>
      <Steps steps={steps} />

      {/* FORM 
    ----------------------*/}

      <MailchimpForm />
    </>
  );
};

export default AsigurareDeLocuinta;
