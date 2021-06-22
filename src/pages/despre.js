import PageHead from '../components/layout/PageHead';
import Hero from '../components/ui/Hero';
import MailchimpForm from '../components/ui/MailchimpForm';
import Card from '../components/ui/Card';
import {
  Flex,
  Spacer,
  Center,
  Text,
  Heading,
  Box,
  Button,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import About from '../svg/about.svg';
import { values } from '../utils/values';

const Despre = () => {
  return (
    <>
      <PageHead title="asigurari de acasa - Despre noi" />
      {/* HERO
    ----------------------*/}
      <Hero
        title="Asigurari dedicate tie"
        subtitle="Te asiguram că vei obtine cea mai bună oferta care tine cont de nevoile tale, si care se preteaza cel mai bine stilului tău de viată."
      >
        <About />
      </Hero>

      <Flex
        flexWrap="wrap"
        pt="100px"
        direction="row"
        w="100%"
        h="60vh"
        align="flex-start"
        justify="center"
      >
        <Box w={{ base: '100%', sm: '100%', md: '50%', lg: '50%' }} pr="50px">
          <Heading as="h3" fontSize="48px" mb="30px" noOfLines={2}>
            Amet minim mollit non deserunt ullamco
          </Heading>
        </Box>
        <Box w={{ base: '100%', sm: '100%', md: '50%', lg: '50%' }}>
          <Text mb="30px" fontSize="lg" noOfLines={8}>
            Asigurari de acasa, a aparut din dorinta de a te ajuta, de ati oferi
            consultanta pentru ca tu să iei cea mai bună decizie. Impreuna cu
            partenerul sau Destine Asigurare Reasigurare SRL, iti stam la
            dispozitie pe toată durata de valabilitate a asigurării tale!
          </Text>
          <Text mb="30px" fontSize="lg" noOfLines={8}>
            Asigurari de acasa, se diferentiaza prin profesionalism, atentie si
            flexibilitate, dedicate tie. Dincolo de asigurari vei beneficia de
            consiliere in domeniu.
          </Text>
        </Box>
      </Flex>

      {/* ADDED VALUES 
    ---------------------------------------------------------------- */}
      <Wrap justify="space-between" w="100%">
        {values?.map((value) => (
          <WrapItem key={value.count}>
            <Card
              headingSize="24px"
              textSize="14px"
              width="220px"
              height="300px"
              item={value}
              padding="20px"
              borderRadius="0"
            />
          </WrapItem>
        ))}
      </Wrap>

      {/* FORM 
    ----------------------*/}
      <MailchimpForm />
    </>
  );
};

export default Despre;
