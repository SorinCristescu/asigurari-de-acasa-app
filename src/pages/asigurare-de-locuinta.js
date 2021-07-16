import { useRef } from 'react';
import PageHead from '../components/layout/PageHead';
import Hero from '../components/ui/Hero';
import MailchimpForm from '../components/ui/MailchimpForm';
import Steps from '../components/ui/Steps';
import { Flex, Text, Heading } from '@chakra-ui/react';
import Locuinta from '../svg/locuinta.svg';
import { insurances } from '../utils/insurances';
import SlideY from '../utils/animation/slideY';

const AsigurareDeLocuinta = () => {
  const textRef = useRef(null);
  const headingRef = useRef(null);
  const stepRef = useRef(null);
  const steps = insurances[2].steps;
  const insuranceName = insurances[2].title;
  return (
    <>
      <PageHead
        title="asigurari de acasa - Asigurare de locuinta"
        description="asigurarideacasa.ro ofera servicii de intermediere si consultanta in domeniul asigurarilor generale si de viata. Emitem polite in numele societatilor de asigurare" keywords="asigurari, asigurare, oferte, asigurarideacasa.ro, RCA, CASCO, Calatorie, Locuinta, Facultativa, Transport, Sanatate, Accidente, PAD"
      />

      {/* HERO
    ----------------------*/}
      <Hero
        title="Asigurare de locuinta"
        subtitle="O mica investitie, un mare avantaj!"
      >
        <Locuinta />
      </Hero>
      <SlideY componentRef={textRef} id="text" start="top 80%" end="+=100">
        <Flex width="100%" align="center" justify="flex-start" mt="50px">
          <Text width={{ base: '100%', md: '100%', lg: '70%' }} fontSize="18px">
            Aceasta asigurare facultativa vine in completarea asigurarii
            obligatorii PAD, prin acoperirea mai multor riscuri precum si ca
            excedent de suma asigurata pe cele 3 riscuri acoperite de PAD.
          </Text>
        </Flex>
      </SlideY>
      {/* STEPS 
    ----------------------*/}
      <SlideY
        componentRef={headingRef}
        id="heading"
        start="top 80%"
        end="+=100"
      >
        <Heading
          mt="100px"
          as="h2"
          fontSize={{ base: '32px', sm: '32px', md: '48px', lg: '48px' }}
          noOfLines={6}
          align="left"
          w={{ base: '100%', sm: '100%', md: '100%', lg: '100%' }}
        >
          Cum sa obtii o {insuranceName} doar in {steps.length} pasi.
        </Heading>
      </SlideY>
      <SlideY componentRef={stepRef} id="step" start="top 80%" end="+=100">
        <Steps steps={steps} />
      </SlideY>
      {/* FORM 
    ----------------------*/}

      <MailchimpForm />
    </>
  );
};

export default AsigurareDeLocuinta;
