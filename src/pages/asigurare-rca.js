import PageHead from '../components/layout/PageHead';
import Hero from '../components/ui/Hero';
import MailchimpForm from '../components/ui/MailchimpForm';
import Steps from '../components/ui/Steps';
import RCA from '../svg/rca.svg';

import { Flex, Text, Heading } from '@chakra-ui/react';

import { insurances } from '../utils/insurances';

const AsigurareRCA = ({ SEO }) => {
  const steps = insurances[0].steps;
  const insuranceName = insurances[0].title;
  return (
    <>
      {/* <PageHead
        title={SEO.title}
        description={SEO.description}
        keywords={SEO.keywords}
      /> */}

      {/* HERO
    ----------------------*/}
      <Hero
        title="Asigurare RCA"
        subtitle="Ofera suport in cazul incidentelor auto!"
      >
        <RCA />
      </Hero>
      <Flex width="100%" align="center" justify="flex-start" mt="50px">
        <Text width={{ base: '100%', md: '100%', lg: '70%' }}>
          Polita de Asigurarea de Răspundere Civilă Auto (RCA) este practic un
          contract incheiat intre proprietarul unui vehicul, persoană fizică sau
          juridică și o societate de asigurări care are dreptul de a practica
          asigurarea RCA pe teritoriul Romaniei. In baza acestui contract,
          asigurătorul care a emis polita de asigurare RCA plăteşte despăgubiri
          tertelor persoane păgubite in urma unui accident provocat de vehiculul
          pentru care s-a incheiat asigurarea, pentru daunele materiale şi/sau
          decesul ori vătămările corporale, inclusiv daunele morale, suferite in
          acel accident.
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
        Cum sa obtii o {insuranceName} doar in {steps.length} pasi.
      </Heading>
      <Steps steps={steps} />

      {/* FORM 
    ----------------------*/}

      <MailchimpForm />
    </>
  );
};

export default AsigurareRCA;

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/pages`);
  const pages = await res.json();

  return {
    props: {
      pages,
      revalidate: 1,
    },
  };
}
