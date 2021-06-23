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
  return (
    <>
      <PageHead title="asigurari de acasa - Home" />
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
        <Box width={{ base: '100%', sm: '100%', md: '100%', lg: '50%' }}>
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
          <Box w={{ base: '100%', sm: '100%', md: '100%', lg: '50%' }}>
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
