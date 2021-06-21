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
      <PageHead title="asigurari de acasa - Despre noi" />

      <Flex
        pt="100px"
        mb="100px"
        direction="column"
        w="100%"
        // h="50vh"
        align="center"
        justify="center"
      ></Flex>
      <Heading as="h3" fontSize="48px" mb="70px" noOfLines={2}>
        Intrebari si raspunsuri frecvente
      </Heading>
      <Accordion width="60%">
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
    </>
  );
};

export default FAQ;
