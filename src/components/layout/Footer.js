import { Flex, Box, Center, Text, IconButton } from '@chakra-ui/react';

import Link from 'next/link';
import Logo from '../ui/Logo';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaPhone,
  FaHome,
  FaEnvelope,
} from 'react-icons/fa';
import { insurances } from '../../utils/insurances';
const Footer = () => {
  return (
    <Flex
      flexWrap="wrap"
      width="100%"
      px={{ base: '20px', md: '100px', lg: '100px' }}
      py="50px"
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
          {insurances.map((link) => (
            <Link href={link.href}>
              <a>{link.title}</a>
            </Link>
          ))}
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
          <a href="https://www.facebook.com/asigurarideacasa" target="_blank">
            <IconButton
              variant="ghost"
              fontSize="20px"
              size="md"
              mx="10px"
              isRound
              icon={<FaFacebookSquare />}
            />
          </a>
          <a href="https://www.instagram.com/asigurarideacasa/" target="_blank">
            <IconButton
              variant="ghost"
              fontSize="20px"
              size="md"
              mx="10px"
              isRound
              icon={<FaInstagramSquare />}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/asigurari-de-acasa-779466215/"
            target="_blank"
          >
            <IconButton
              variant="ghost"
              fontSize="20px"
              size="md"
              mx="10px"
              isRound
              icon={<FaLinkedin />}
            />
          </a>
        </Center>
      </Flex>
      <Box pt="20px">
        <Flex
          w="100%"
          pt="5px"
          direction="row"
          align="center"
          justify="flex-start"
        >
          <FaHome />
          <Text ml="10px" fontSize="14px" textAlign="left">
            Bucuresti, sector 4, Aleea Tomesti nr 10A, Corp B, etaj 1, ap 10
          </Text>
        </Flex>
        <Flex
          w="100%"
          pt="5px"
          direction="row"
          align="center"
          justify="flex-start"
        >
          <FaPhone />
          <Text ml="10px" fontSize="14px" textAlign="left">
            0722 354 935
          </Text>
        </Flex>
        <Flex
          w="100%"
          pt="5px"
          direction="row"
          align="center"
          justify="flex-start"
        >
          <FaEnvelope />
          <Text ml="10px" fontSize="14px" textAlign="left">
            office@asigurarideacasa.ro
          </Text>
        </Flex>
      </Box>
      {/* <Text>© Copyright {Date.now()}</Text> */}
    </Flex>
  );
};

export default Footer;
