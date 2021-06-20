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

const AsigurareDeViata = () => {
  const steps = insurances[3].steps;
  return (
    <>
      <PageHead
        title="asigurari de acasa - Asigurare de viata"
        description="Asigurari de viata"
        keywords="viata, asigurari de viata"
      />

      {/* HERO
    ----------------------*/}
      <Hero
        title="Asigurare de viata"
        subtitle="Protectie si satisfactii financiare!"
      />
      <Flex width="100%" align="center" justify="flex-start">
        <Text mb="50px" width="50%">
          Numita generic „asigurare de viată”, acest tip de instrument financiar
          are obiective diverse, care pot fi combinate. Aceasta oferă in general
          protectie, ajutand familia beneficiarului să iși păstreze standardul
          de viată in cazul unor evenimente neprevăzute. Adesea, companiile de
          asigurări adaugă componente de economisire, investitii sau de
          sănătate, astfel incat produsele de asigurare din aceasta categorie,
          să se plieze cat mai bine pe interesele fiecărui client in parte.
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

export default AsigurareDeViata;