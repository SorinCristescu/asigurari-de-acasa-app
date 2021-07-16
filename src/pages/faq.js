import React from 'react';
import PageHead from '../components/layout/PageHead';
import {
  Flex,
  Heading,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

import { faq } from '../utils/faq';
const FAQ = () => {
  return (
    <>
      <PageHead title="asigurari de acasa - FAQ" description="asigurarideacasa.ro ofera servicii de intermediere si consultanta in domeniul asigurarilor generale si de viata. Emitem polite in numele societatilor de asigurare" keywords="asigurari, asigurare, oferte, asigurarideacasa.ro, RCA, CASCO, Calatorie, Locuinta, Facultativa, Transport, Sanatate, Accidente, PAD"/>

      <Flex
        pt="100px"
        mb="100px"
        direction="column"
        w={{ base: '100%', md: '100%', lg: '70%' }}
        // h="50vh"
        align="center"
        justify="center"
      >
        <Heading
          as="h3"
          fontSize={{ base: '32px', sm: '32px', md: '48px', lg: '48px' }}
          mb="70px"
          noOfLines={2}
        >
          Intrebari si raspunsuri frecvente
        </Heading>
        <Accordion w={{ base: '100%', md: '100%', lg: '70%' }}>
          {faq &&
            faq.map((item) => (
              <AccordionItem key={item.id}>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Heading fontSize="18px" my="20px">
                      {item.intrebare}
                    </Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={4}>{item.raspuns}</AccordionPanel>
              </AccordionItem>
            ))}
        </Accordion>
      </Flex>
    </>
  );
};

export default FAQ;
