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
import CASCO from '../svg/casco.svg';
import { insurances } from '../utils/insurances';

const AsigurareCASCO = () => {
  const steps = insurances[1].steps;
  return (
    <>
      <PageHead
        title="asigurari de acasa - Asigurare CASCO"
        description="Asigurari CASCO"
        keywords=" asigurari CASCO, casco"
      />

      {/* HERO
    ----------------------*/}
      <Hero
        title="Asigurare CASCO"
        subtitle="Tine departe cheltuielile si stresul de masina ta!"
      >
        <CASCO />
      </Hero>
      <Flex width="100%" align="center" justify="flex-start">
        <Text width={{ base: '100%', md: '100%', lg: '70%' }}>
          CASCO este o asigurare facultativa, in baza careia compania de
          asigurare achita despagubiri pentru aproape orice daune suferite de
          vehiculul asigurat. Nefiind obligatorie prin lege, decizia de
          incheiere a unui contract de asigurare CASCO apartine proprietarului
          de autovehicul, persoana fizica sau juridica. In cazul autovehiculelor
          achizitionate prin leasing, asigurarea CASCO este obligatorie, iar
          pretul politei este platit de catre utilizator, in timp ce asiguratul
          este compania de leasing.
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

export default AsigurareCASCO;
