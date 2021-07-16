import { useRef } from 'react';
import PageHead from '../components/layout/PageHead';
import Hero from '../components/ui/Hero';
import MailchimpForm from '../components/ui/MailchimpForm';
import Steps from '../components/ui/Steps';
import { Flex, Text, Heading } from '@chakra-ui/react';
import Sanatate from '../svg/sanatate.svg';
import SlideY from '../utils/animation/slideY';
import { insurances } from '../utils/insurances';

const AsigurareDeSanatate = () => {
  const textRef = useRef(null);
  const headingRef = useRef(null);
  const stepRef = useRef(null);
  const steps = insurances[4].steps;
  const insuranceName = insurances[4].title;
  return (
    <>
      <PageHead
        title="asigurari de acasa - Asigurare de sanatate"
        description="asigurarideacasa.ro ofera servicii de intermediere si consultanta in domeniul asigurarilor generale si de viata. Emitem polite in numele societatilor de asigurare" keywords="asigurari, asigurare, oferte, asigurarideacasa.ro, RCA, CASCO, Calatorie, Locuinta, Facultativa, Transport, Sanatate, Accidente, PAD"
      />

      {/* HERO
    ----------------------*/}
      <Hero title="Asigurare de sanatate" subtitle="Te mentine sanatos!">
        <Sanatate />
      </Hero>
      <SlideY componentRef={textRef} id="text" start="top 80%" end="+=100">
        <Flex width="100%" align="center" justify="flex-start" mt="50px">
          <Text width={{ base: '100%', md: '100%', lg: '70%' }} fontSize="18px">
            Asigurarea de sănătate are drept scop compensarea integrala sau
            partiala a asiguratului, in ceea ce priveste costurile tratamentelor
            medicale, ale cazurilor de graviditate maternală și in caz de
            accidente de sănătate, apartenenta ca membru la acest sistem de
            asigurare de sănătate privat, aducand cu sine o serie de beneficii
            pentru asigurat, in functie de tipul de servicii ales, de
            tratamentele efectuate, dar și de veniturile pe care le are
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

export default AsigurareDeSanatate;
