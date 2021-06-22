import { Flex, Center, Text, IconButton } from '@chakra-ui/react';

import Link from 'next/link';
import Logo from '../ui/Logo';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <Flex
      flexWrap="wrap"
      width="100%"
      px={{ base: '20px', md: '100px', lg: '100px' }}
      my="50px"
      direction="row"
      align="center"
      justify="space-between"
    >
      <Flex
        flexWrap="wrap"
        w={{
          base: '100%',
          sm: '100%',
          md: '50%',
          lg: '50%',
          xl: '50%',
          '2xl': '50%',
        }}
        direction="row"
        align="flex-start"
        justify="space-between"
        mt="10px"
      >
        <Flex
          w={{
            base: '100%',
            sm: '100%',
            md: '50%',
            lg: '50%',
            xl: '50%',
            '2xl': '50%',
          }}
          direction="column"
          align="flex-start"
          justify="flex-start"
        >
          <Link href="/asigurare-rca">
            <a>Asigurare RCA</a>
          </Link>
          <Link href="/asigurare-casco">
            <a>Asigurare CASCO</a>
          </Link>
          <Link href="/asigurare-de-viata">
            <a>Asigurare de viata</a>
          </Link>
          <Link href="/asigurare-de-transport">
            <a>Asigurare de transport</a>
          </Link>
          <Link href="/asigurare-pad">
            <a>Asigurare PAD</a>
          </Link>
          <Link href="/asigurare-de-locuinta">
            <a>Asigurare de locuinta</a>
          </Link>
          <Link href="/asigurare-de-sanatate">
            <a>Asigurare de sanatate</a>
          </Link>
          <Link href="/asigurare-de-accidente">
            <a>Asigurare de accidente</a>
          </Link>
        </Flex>

        <Flex
          width="50%"
          direction="column"
          align="flex-start"
          justify="flex-start"
        >
          <Link href="/despre">
            <a>Despre noi</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
          <Link href="/faq">
            <a>FAQ</a>
          </Link>
          <Link href="/termeni-de-utilizare">
            <a>Termeni de utilizare</a>
          </Link>
          <Link href="/politica-de-confidentialitate">
            <a>Politica de confidentialitate</a>
          </Link>

          <a href="https://anpc.ro/" target="_blank" rel="noopener">
            ANPC
          </a>
        </Flex>
      </Flex>

      <Flex
        w="50%"
        direction="column"
        align={{ base: 'flex-start', md: 'center', lg: 'center' }}
        justify="center"
        mt="50px"
      >
        <Logo />
        <Text my="20px" fontSize="14px" textAlign="left">
          Urmareste-ne pe:
        </Text>
        <Center>
          <IconButton
            variant="ghost"
            fontSize="20px"
            size="md"
            mx="10px"
            isRound
            icon={<FaFacebookSquare />}
          />

          <IconButton
            variant="ghost"
            fontSize="20px"
            size="md"
            mx="10px"
            isRound
            icon={<FaInstagramSquare />}
          />
          <IconButton
            variant="ghost"
            fontSize="20px"
            size="md"
            mx="10px"
            isRound
            icon={<FaLinkedin />}
          />
        </Center>
      </Flex>
    </Flex>
  );
};

export default Footer;
