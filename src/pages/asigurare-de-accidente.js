import PageHead from '../components/layout/PageHead';
import Hero from '../components/ui/Hero';
import MailchimpForm from '../components/ui/MailchimpForm';
import Steps from '../components/ui/Steps';
import { Flex, Text } from '@chakra-ui/react';
import Accidente from '../svg/accidente.svg';
import { insurances } from '../utils/insurances';

const AsigurareDeAccidente = () => {
  const steps = insurances[6].steps;
  return (
    <>
      <PageHead
        title="asigurari de acasa - Asigurare de accidente"
        description="Asigurari de accidente"
        keywords="RCA, rca, asigurari de accidente"
      />

      {/* HERO
    ----------------------*/}
      <Hero
        title="Asigurare de accidente"
        subtitle="Imprevizibilul poate fi compensat!"
      >
        <Accidente />
      </Hero>
      <Flex width="100%" align="center" justify="flex-start" mt="50px">
        <Text width={{ base: '100%', md: '100%', lg: '70%' }}>
          Poate fi incheiata atat de persoane fizice cat si de persoane
          juridice, ca polita individuala sau de grup.Aceasta asigurare este
          recomandata in general persoanelor care in urma desfasurarii
          activitatii profesionale sunt expuse riscului de accidentare, dar si
          persoanelor care prin practicarea unor activitati si sporturi, isi
          asuma anumite riscuri ce pot duce la accidentare sau din nefericire
          chiar la deces.
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

export default AsigurareDeAccidente;
