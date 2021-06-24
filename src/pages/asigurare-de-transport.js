import { useRef } from 'react';
import PageHead from '../components/layout/PageHead';
import Hero from '../components/ui/Hero';
import MailchimpForm from '../components/ui/MailchimpForm';
import Steps from '../components/ui/Steps';
import { Flex, Text, Heading } from '@chakra-ui/react';
import Transport from '../svg/transport.svg';
import SlideY from '../utils/animation/slideY';
import { insurances } from '../utils/insurances';

const AsigurareDeTransport = () => {
  const textRef = useRef(null);
  const headingRef = useRef(null);
  const stepRef = useRef(null);
  const steps = insurances[5].steps;
  const insuranceName = insurances[5].title;
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
      <SlideY componentRef={textRef} id="text" start="top 80%" end="+=100">
        <Flex width="100%" align="center" justify="flex-start" mt="50px">
          <Text width={{ base: '100%', md: '100%', lg: '70%' }} fontSize="18px">
            Asigurarea de raspundere a transportatorului, in calitate de caraus,
            pentru marfurile transportate cu vehicule, vizeaza transporturile
            rutiere de marfa, cu vehicule inmatriculate in Romania, in baza unor
            contracte de transport.
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

export default AsigurareDeTransport;
