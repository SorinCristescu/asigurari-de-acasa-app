import PageHead from '../components/layout/PageHead';
import Hero from '../components/ui/Hero';
import MailchimpForm from '../components/ui/MailchimpForm';
import Card from '../components/ui/Card';
import { Flex, Text, Heading, Box, Wrap, WrapItem } from '@chakra-ui/react';
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
        py="100px"
        direction="row"
        w="100%"
        align="flex-start"
        justify="center"
      >
        <Box
          w={{ base: '100%', sm: '100%', md: '50%', lg: '50%' }}
          pr={{ base: '0px', sm: '0px', md: '100px', lg: '100px' }}
        >
          <Heading
            as="h3"
            fontSize={{ base: '32px', sm: '32px', md: '48px', lg: '48px' }}
            mb="30px"
            noOfLines={6}
          >
            Cine suntem si de ce ne-ai alege pe noi
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
          <Text mb="30px" fontSize="lg" noOfLines={8}>
            Pe parcursul explorarii tale vei descoperi ca suntem in primul rand
            oameni,ca obiectivul nostru este sa iti fim alaturi, iar daca vom
            reusi va fi cea mai mare realizare a noastra. Filozofia noastra se
            bazeaza pe relatia de incredere dintre broker si client, incercand
            de fiecare data sa devenim un partener de nadejde la care sa revii.
          </Text>
        </Box>
      </Flex>

      {/* ADDED VALUES 
    ---------------------------------------------------------------- */}
      <Box
        w={{ base: '100%', sm: '100%', md: '100%', lg: '100%' }}
        pr={{ base: '0px', sm: '0px', md: '100px', lg: '100px' }}
      >
        <Heading
          as="h3"
          fontSize={{ base: '32px', sm: '32px', md: '48px', lg: '48px' }}
          textAlign="left"
          mb="50px"
          noOfLines={2}
        >
          Ce asteptari sa ai de la noi
        </Heading>
      </Box>
      <Wrap justify="space-between" w="100%">
        {values?.map((value) => (
          <WrapItem key={value.count}>
            <Card
              headingSize="24px"
              textSize="14px"
              width="220px"
              height="300px"
              item={value}
              paddingRight="0px"
              paddingLeft={{ base: '0px', sm: '0px', md: '20px', lg: '20px' }}
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
