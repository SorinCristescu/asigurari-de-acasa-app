import { Flex, Center, Text, IconButton } from '@chakra-ui/react';

import Link from 'next/link';
import Logo from '../ui/Logo';

const Footer = () => {
  return (
    <Flex
      width="100%"
      px="100px"
      my="50px"
      h="30vh"
      direction="row"
      align="center"
      justify="space-between"
    >
      <Flex
        width="50%"
        h="100%"
        direction="row"
        align="center"
        justify="space-between"
      >
        <Flex
          width="50%"
          h="100%"
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
          <Link href="/">
            <a>FAQ</a>
          </Link>
          <Link href="/termeni-de-utilizare">
            <a>Termeni de utilizare</a>
          </Link>
          <Link href="/politica-de-confidentialitate">
            <a>Politica de confidentialitate</a>
          </Link>
          <Link href="/">
            <a>ANPC</a>
          </Link>
        </Flex>
        <Flex
          width="50%"
          h="100%"
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
          <Link href="/">
            <a>Asigurare de calatorie</a>
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
      </Flex>
      <Flex w="50%" h="100%" direction="column" align="center" justify="center">
        <Logo />
        <Text my="20px" fontSize="14px">
          Urmareste-ne pe:
        </Text>
        <Center w="200px">
          <IconButton
            variant="ghost"
            // bg="#4D4DFF"
            fontSize="20px"
            size="md"
            mx="10px"
            isRound
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C17.514 2 22 6.486 22 12C22 17.514 17.514 22 12 22C6.486 22 2 17.514 2 12C2 6.486 6.486 2 12 2ZM12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM10 10H8V12H10V18H13V12H14.82L15 10H13V9.167C13 8.689 13.096 8.5 13.558 8.5H15V6H12.596C10.798 6 10 6.792 10 8.308V10Z"
                fill="#0D0D0D"
              />
            </svg>
          </IconButton>
          <IconButton
            variant="ghost"
            fontSize="20px"
            size="md"
            mx="10px"
            isRound
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C17.514 2 22 6.486 22 12C22 17.514 17.514 22 12 22C6.486 22 2 17.514 2 12C2 6.486 6.486 2 12 2ZM12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM12 7.082C13.602 7.082 13.792 7.088 14.425 7.117C16.052 7.191 16.81 7.962 16.885 9.576C16.913 10.209 16.919 10.398 16.919 12C16.919 13.602 16.913 13.792 16.885 14.424C16.81 16.037 16.053 16.81 14.425 16.884C13.792 16.912 13.603 16.919 12 16.919C10.398 16.919 10.208 16.913 9.576 16.884C7.946 16.809 7.191 16.035 7.116 14.424C7.088 13.792 7.081 13.602 7.081 12C7.081 10.398 7.088 10.208 7.116 9.576C7.19 7.961 7.948 7.19 9.576 7.116C10.208 7.087 10.398 7.082 12 7.082ZM12 6C10.37 6 10.167 6.007 9.526 6.037C7.346 6.137 6.136 7.346 6.036 9.526C6.007 10.167 6 10.371 6 12C6 13.63 6.007 13.834 6.036 14.474C6.136 16.653 7.346 17.864 9.526 17.964C10.167 17.993 10.37 18 12 18C13.63 18 13.834 17.993 14.475 17.964C16.651 17.864 17.866 16.655 17.964 14.474C17.993 13.834 18 13.63 18 12C18 10.371 17.993 10.167 17.964 9.526C17.866 7.349 16.655 6.136 14.475 6.037C13.834 6.007 13.63 6 12 6ZM12 8.919C10.299 8.919 8.919 10.298 8.919 12C8.919 13.702 10.299 15.081 12 15.081C13.701 15.081 15.081 13.702 15.081 12C15.081 10.299 13.701 8.919 12 8.919ZM12 14C10.895 14 10 13.105 10 12C10 10.896 10.895 10 12 10C13.104 10 14.001 10.895 14.001 12C14.001 13.105 13.104 14 12 14ZM15.202 8.078C14.805 8.078 14.482 8.4 14.482 8.798C14.482 9.195 14.804 9.518 15.202 9.518C15.6 9.518 15.923 9.196 15.923 8.798C15.923 8.4 15.601 8.078 15.202 8.078Z"
                fill="#0D0D0D"
              />
            </svg>
          </IconButton>
          <IconButton
            variant="ghost"
            fontSize="20px"
            size="md"
            mx="10px"
            isRound
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C17.514 2 22 6.486 22 12C22 17.514 17.514 22 12 22C6.486 22 2 17.514 2 12C2 6.486 6.486 2 12 2ZM12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM10 8C10 8.557 9.553 9.008 9 9.008C8.447 9.008 8 8.558 8 8C8 7.443 8.447 6.992 9 6.992C9.553 6.992 10 7.444 10 8ZM10 10H8V16H10V10ZM13 10H11V16H13V13.139C13 11.417 15.002 11.258 15.002 13.139V16H17V12.641C17 9.357 13.872 9.477 13 11.093V10Z"
                fill="#0D0D0D"
              />
            </svg>
          </IconButton>
        </Center>
      </Flex>
    </Flex>
  );
};

export default Footer;