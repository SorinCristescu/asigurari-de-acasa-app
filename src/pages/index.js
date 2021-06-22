import PageHead from '../components/layout/PageHead';
import Image from 'next/image';
import MailchimpForm from '../components/ui/MailchimpForm';
import Hero from '../components/ui/Hero';
import Card from '../components/ui/Card';
import Testimonial from '../components/ui/Testimonial';
import MarqueeComponent from '../components/ui/Marque';
import Carousel from '../components/ui/Carousel';
import { Flex, Center, Text, Heading, Box } from '@chakra-ui/react';
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
        subtitle="Noi o spunem dar o si demonstram, tu doar trebuie sa fi deschis in a afla cum."
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
            fontSize="48px"
            mb="30px"
            noOfLines={6}
            align="left"
            w="50%"
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint
          </Heading>
          <Text mb="30px" fontSize="lg" noOfLines={2} align="left">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </Text>
        </Flex>
        <Box width={{ base: '100%', sm: '100%', md: '100%', lg: '50%' }}>
          <Carousel items={insurances} width="100%" height="400px">
            <Card
              headingSize="36px"
              textSize="18px"
              width="100%"
              height="350px"
              padding="50px"
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
            <Heading as="h3" fontSize="48px" mb="30px" noOfLines={2}>
              Amet minim mollit non deserunt ullamco
            </Heading>
          </Box>
          <Box w={{ base: '100%', sm: '100%', md: '100%', lg: '50%' }}>
            <Text mb="30px" fontSize="lg" noOfLines={8}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Text>
            <Text mb="30px" fontSize="lg" noOfLines={8}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Text>
          </Box>
        </Flex>
        <Box w="100%" h="200px" mt="100px">
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
        my="100px"
        width={{ base: '100%', sm: '100%', md: '100%', lg: '60%' }}
        h={{ base: '600px', sm: '600px', md: '500px', lg: '500px' }}
        direction="column"
        align="center"
        justify="center"
      >
        <Heading fontSize="36px" mb="50px">
          Ce spun clientii nostri despre noi
        </Heading>
        <Carousel items={testimonials} width="100%" h="500px">
          <Testimonial />
        </Carousel>
      </Flex>
      {/* FORM 
    ----------------------*/}
      <MailchimpForm />
    </>
  );
};

export default Index;
