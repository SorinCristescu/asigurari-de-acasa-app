import PageHead from '../components/layout/PageHead';
import Hero from '../components/ui/Hero';
import MailchimpForm from '../components/ui/MailchimpForm';
import Steps from '../components/ui/Steps';
import { Flex, Text } from '@chakra-ui/react';
import Sanatate from '../svg/sanatate.svg';

import { insurances } from '../utils/insurances';

const AsigurareDeSanatate = () => {
  const steps = insurances[4].steps;
  return (
    <>
      <PageHead
        title="asigurari de acasa - Asigurare de sanatate"
        description="Asigurari de sanatate"
        keywords="RCA, rca, asigurari de sanatate"
      />

      {/* HERO
    ----------------------*/}
      <Hero title="Asigurare de sanatate" subtitle="Te mentine sanatos!">
        <Sanatate />
      </Hero>
      <Flex width="100%" align="center" justify="flex-start" mt="50px">
        <Text width={{ base: '100%', md: '100%', lg: '70%' }}>
          Asigurarea de sănătate are drept scop compensarea integrala sau
          partiala a asiguratului, in ceea ce priveste costurile tratamentelor
          medicale, ale cazurilor de graviditate maternală și in caz de
          accidente de sănătate, apartenenta ca membru la acest sistem de
          asigurare de sănătate privat, aducand cu sine o serie de beneficii
          pentru asigurat, in functie de tipul de servicii ales, de tratamentele
          efectuate, dar și de veniturile pe care le are
        </Text>
      </Flex>

      {/* STEPS 
    ----------------------*/}
      <Steps steps={steps} />

      {/* FORM 
    ----------------------*/}

      <MailchimpForm />
    </>
  );
};

export default AsigurareDeSanatate;
