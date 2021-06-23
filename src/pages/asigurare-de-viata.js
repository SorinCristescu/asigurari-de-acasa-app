import PageHead from '../components/layout/PageHead';
import Hero from '../components/ui/Hero';
import MailchimpForm from '../components/ui/MailchimpForm';
import Steps from '../components/ui/Steps';
import { Flex, Text, Heading } from '@chakra-ui/react';
import Life from '../svg/life.svg';

import { insurances } from '../utils/insurances';

const AsigurareDeViata = () => {
  const steps = insurances[3].steps;
  const insuranceName = insurances[3].title;
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
      >
        <Life />
      </Hero>
      <Flex width="100%" align="center" justify="flex-start" mt="50px">
        <Text width={{ base: '100%', md: '100%', lg: '70%' }}>
          Numita generic „asigurare de viată”, acest tip de instrument financiar
          are obiective diverse, care pot fi combinate. Aceasta oferă in general
          protectie, ajutand familia asiguratului să iși păstreze standardul de
          viată in cazul unor evenimente neprevăzute. Adesea, companiile de
          asigurări adaugă componente de economisire, investitii sau de
          sănătate, astfel incat produsele de asigurare din aceasta categorie,
          să se plieze cat mai bine pe interesele fiecărui client in parte.
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

export default AsigurareDeViata;
