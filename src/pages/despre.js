import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import PageHead from '../components/layout/PageHead';
import Hero from '../components/ui/Hero';
import MailchimpForm from '../components/ui/MailchimpForm';
import Card from '../components/ui/Card';
import {
  Flex,
  Text,
  Heading,
  Box,
  Wrap,
  WrapItem,
  Center,
} from '@chakra-ui/react';
import About from '../svg/about.svg';
import { values } from '../utils/values';
import SlideY from '../utils/animation/slideY';

const Despre = () => {
  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }
  const headingRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const heading2Ref = useRef(null);
  const valueRef = useRef([]);

  useEffect(() => {
    if (values && values.length !== 0) {
      gsap.fromTo(
        [valueRef.current],
        {
          y: '50px',
          opacity: 0,
        },
        {
          duration: 1.5,
          y: '0px',
          opacity: 1,
          ease: 'power3.inOut',
          stagger: {
            amount: 0.8,
          },
          scrollTrigger: {
            markers: false,
            trigger: '#heading2',
            //pin: true, // pin the trigger element while active
            start: 'top 80%', // when the top of the trigger hits the top of the viewport
            end: '+=100', // end after scrolling 500px beyond the start
            scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          },
        }
      );
    }
  }, [valueRef]);

  return (
    <>
      <PageHead title="asigurari de acasa - Despre noi" description="asigurarideacasa.ro ofera servicii de intermediere si consultanta in domeniul asigurarilor generale si de viata. Emitem polite in numele societatilor de asigurare" keywords="asigurari, asigurare, oferte, asigurarideacasa.ro, RCA, CASCO, Calatorie, Locuinta, Facultativa, Transport, Sanatate, Accidente, PAD"/>
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
        zIndex="1"
      >
        <Box
          w={{ base: '100%', sm: '100%', md: '50%', lg: '50%' }}
          pr={{ base: '0px', sm: '0px', md: '100px', lg: '100px' }}
        >
          <SlideY
            componentRef={headingRef}
            id="heading"
            start="top 80%"
            end="+=100"
            markers={false}
          >
            <Heading
              as="h3"
              fontSize={{ base: '32px', sm: '32px', md: '48px', lg: '48px' }}
              mb="30px"
              noOfLines={6}
            >
              Cine suntem si de ce ne-ai alege pe noi
            </Heading>
          </SlideY>
        </Box>

        <Box w={{ base: '100%', sm: '100%', md: '50%', lg: '50%' }}>
          <SlideY
            componentRef={text1Ref}
            id="heading"
            start="top 80%"
            end="+=100"
            markers={false}
          >
            <Text mb="30px" fontSize="lg" noOfLines={8}>
              Asigurari de acasa, a aparut din dorinta de a te ajuta, de ati
              oferi consultanta pentru ca tu să iei cea mai bună decizie.
              Impreuna cu partenerul sau Destine Broker de Asigurare Reasigurare
              SRL, iti stam la dispozitie pe toată durata de valabilitate a
              asigurării tale!
            </Text>
          </SlideY>
          <SlideY
            componentRef={text2Ref}
            id="heading"
            start="top 80%"
            end="+=100"
            markers={false}
          >
            <Text mb="30px" fontSize="lg" noOfLines={8}>
              Asigurari de acasa, se diferentiaza prin profesionalism, atentie
              si flexibilitate, dedicate tie. Dincolo de asigurari vei beneficia
              de consiliere in domeniu.
            </Text>
          </SlideY>
          <SlideY
            componentRef={text3Ref}
            id="heading"
            start="top 80%"
            end="+=100"
            markers={false}
          >
            <Text mb="30px" fontSize="lg" noOfLines={8}>
              Pe parcursul explorarii tale vei descoperi ca suntem in primul
              rand oameni,ca obiectivul nostru este sa iti fim alaturi, iar daca
              vom reusi va fi cea mai mare realizare a noastra. Filozofia
              noastra se bazeaza pe relatia de incredere dintre broker si
              client, incercand de fiecare data sa devenim un partener de
              nadejde la care sa revii.
            </Text>
          </SlideY>
        </Box>
      </Flex>

      {/* ADDED VALUES 
    ---------------------------------------------------------------- */}
      <Box
        w={{ base: '100%', sm: '100%', md: '100%', lg: '100%' }}
        pr={{ base: '0px', sm: '0px', md: '100px', lg: '100px' }}
      >
        <SlideY
          componentRef={heading2Ref}
          id="heading2"
          start="top 80%"
          end="+=100"
          markers={false}
        >
          <Heading
            as="h3"
            w="full"
            fontSize={{ base: '32px', sm: '32px', md: '48px', lg: '48px' }}
            textAlign="left"
            mb="50px"
            noOfLines={2}
          >
            Ce asteptari sa ai de la noi
          </Heading>
        </SlideY>
      </Box>
      <Wrap justify="space-between" w="100%">
        {values?.map((value, index) => (
          <WrapItem
            key={value.count}
            ref={(el) => (valueRef.current[index] = el)}
          >
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
