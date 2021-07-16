import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import PageHead from '../components/layout/PageHead';

import Image from 'next/image';
import MailchimpForm from '../components/ui/MailchimpForm';
import Hero from '../components/ui/Hero';
import Card from '../components/ui/Card';
import Testimonial from '../components/ui/Testimonial';
import MarqueeComponent from '../components/ui/Marque';
import Carousel from '../components/ui/Carousel';
import { Flex, Text, Heading, Box } from '@chakra-ui/react';
import HeroImage from '../svg/hero.svg';
import { insurances } from '../utils/insurances';
import { partners } from '../utils/partners';
import { testimonials } from '../utils/testimonials';

const Index = () => {
  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }
  const heading1 = useRef(null);
  const heading2 = useRef(null);
  const text2 = useRef(null);
  const heading3 = useRef(null);
  const insuranceCarouselRef = useRef(null);
  const testimonialsCarouselRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [heading1.current, insuranceCarouselRef.current],
      {
        y: '50px',
        opacity: '0',
        x: '0',
      },
      {
        duration: 1.5,
        y: '0px',
        opacity: '1',
        x: '0',
        ease: 'power3.inOut',
        scrollTrigger: {
          markers: false,
          trigger: '#heading1',
          //pin: true, // pin the trigger element while active
          start: 'top bottom-=100', // when the top of the trigger hits the top of the viewport
          end: '+=200', // end after scrolling 500px beyond the start
          scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        },
      }
    );
    gsap.fromTo(
      [heading2.current, text2.current],
      {
        y: '50px',
        opacity: '0',
        x: '0',
      },
      {
        duration: 1.5,
        y: '0px',
        opacity: '1',
        x: '0',
        ease: 'power3.inOut',
        scrollTrigger: {
          markers: false,
          trigger: '#heading2',
          //pin: true, // pin the trigger element while active
          start: 'top bottom-=100', // when the top of the trigger hits the top of the viewport
          end: '+=200', // end after scrolling 500px beyond the start
          scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        },
      }
    );
    gsap.fromTo(
      [heading3.current, testimonialsCarouselRef.current],
      {
        y: '50px',
        opacity: '0',
        x: '0',
      },
      {
        duration: 1.5,
        y: '0px',
        opacity: '1',
        x: '0',
        ease: 'power3.inOut',
        scrollTrigger: {
          markers: false,
          trigger: '#heading3',
          //pin: true, // pin the trigger element while active
          start: 'top bottom-=100', // when the top of the trigger hits the top of the viewport
          end: '+=200', // end after scrolling 500px beyond the start
          scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        },
      }
    );
  }, [
    heading1,
    insuranceCarouselRef,
    heading2,
    text2,
    heading3,
    testimonialsCarouselRef,
  ]);
  return (
    <>
      <PageHead title="asigurari de acasa - Home" description="asigurarideacasa.ro ofera servicii de intermediere si consultanta in domeniul asigurarilor generale si de viata. Emitem polite in numele societatilor de asigurare" keywords="asigurari, asigurare, oferte, asigurarideacasa.ro, RCA, CASCO, Calatorie, Locuinta, Facultativa, Transport, Sanatate, Accidente, PAD"/>
      {/* HERO
    ----------------------*/}
      <Hero
        title="Se poate si altfel!"
        subtitle="Iti oferim resursele noastre profesionale, pentru a te asigura eficient. "
      >
        <HeroImage />
      </Hero>

      {/* INSURANCES TYPES
    ----------------------*/}
      <Flex
        direction="row"
        w="100%"
        align="center"
        justify="space-between"
        flexWrap="wrap"
        my="100px"
      >
        <Flex
          width={{ base: '100%', sm: '100%', md: '100%', lg: '50%' }}
          direction="column"
          align="flex-start"
          justify="center"
        >
          <Heading
            id="heading1"
            ref={heading1}
            as="h2"
            fontSize={{ base: '32px', sm: '32px', md: '48px', lg: '48px' }}
            mb="30px"
            noOfLines={6}
            align="left"
            w={{ base: '100%', sm: '100%', md: '100%', lg: '100%' }}
          >
            Dorim sa-ti cream o experienta placuta, prezentandu-ti utilitatea
            asigurarilor
          </Heading>
          {/* <Text mb="30px" fontSize="lg" noOfLines={2} align="left">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </Text> */}
        </Flex>
        <Box
          ref={insuranceCarouselRef}
          width={{ base: '100%', sm: '100%', md: '100%', lg: '50%' }}
        >
          <Carousel items={insurances} width="100%" height="350px">
            <Card
              headingSize="32px"
              textSize="18px"
              width="100%"
              height={{ base: '300px', sm: '300px', md: '400px', lg: '400px' }}
              paddingRight="0px"
              paddingLeft={{ base: '0px', sm: '0px', md: '50px', lg: '50px' }}
              borderRadius="0"
            />
          </Carousel>
        </Box>
      </Flex>
      <Flex
        direction="column"
        w="100%"
        minHeight="100vh"
        align="flex-start"
        justify="center"
        pb="100px"
      >
        {/* <Heading
          as="h2"
          fontSize="48px"
          mb="30px"
          noOfLines={4}
          align="left"
          w="50%"
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint
        </Heading> */}

        {/* PARTNERS
    ----------------------*/}
        <Flex
          flexWrap="wrap"
          direction="row"
          w="100%"
          align="center"
          justify="center"
        >
          <Box
            w={{ base: '100%', sm: '100%', md: '100%', lg: '50%' }}
            pr="50px"
          >
            <Heading
              id="heading2"
              ref={heading2}
              as="h3"
              fontSize={{ base: '32px', sm: '32px', md: '48px', lg: '48px' }}
              mb="30px"
              noOfLines={6}
              align="left"
              w={{ base: '100%', sm: '100%', md: '100%', lg: '100%' }}
            >
              Alege produsele complementare asigurarilor, care includ beneficii
              suplimentare la preturi accesibile.
            </Heading>
          </Box>
          <Box
            ref={text2}
            w={{ base: '100%', sm: '100%', md: '100%', lg: '50%' }}
          >
            <Text mb="30px" fontSize="lg" noOfLines={8}>
              Ca broker de asigurari avem parteneriate cu cele mai importante
              companii de asigurari, iar tu poti alege dintre ofertele lor.
            </Text>
            <Text mb="30px" fontSize="lg" noOfLines={8}>
              Politele de asigurare RCA si PAD achizitionate prin Asigurari de
              acasa, sunt insotite de vouchere de gratuitate despre care vei
              afla la momentul ofertarii.
            </Text>
          </Box>
        </Flex>

        <Box w="100%" h="200px" mt="50px">
          <MarqueeComponent gradient={false} direction="right">
            {partners.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt="Picture"
                width={170}
                height={80}
                layout="intrinsic"
              />
            ))}
          </MarqueeComponent>
        </Box>
      </Flex>

      {/* TESTIMONIALS 
    ----------------------*/}
      <Flex
        direction="column"
        w="100%"
        align="center"
        justify="center"

        // my="100px"
      >
        <Heading
          id="heading3"
          ref={heading3}
          as="h2"
          fontSize={{ base: '32px', sm: '32px', md: '48px', lg: '48px' }}
          mb="30px"
          noOfLines={6}
          textAlign={{ base: 'left', sm: 'left', md: 'center', lg: 'center' }}
          w={{ base: '100%', sm: '100%', md: '50%', lg: '50%' }}
        >
          Ce spun clientii nostri despre noi
        </Heading>
        <Box
          ref={testimonialsCarouselRef}
          width={{ base: '100%', sm: '100%', md: '100%', lg: '50%' }}
          h="500px"
          overflow="hidden"
        >
          <Carousel items={testimonials} width="100%" height="450px">
            <Testimonial />
          </Carousel>
        </Box>
      </Flex>
      {/* FORM 
    ----------------------*/}

      <MailchimpForm />
    </>
  );
};

export default Index;
