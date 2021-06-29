import Link from 'next/link';
import { Flex, Box, IconButton, Center } from '@chakra-ui/react';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from 'react-icons/fa';
import { insurances } from '../../utils/insurances';

const Menu = ({ onToggle, bgColor, colorMode, color }, ref) => {
  return (
    <Flex
      width="100%"
      height="100vh"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      align="center"
      justify="center"
      position="fixed"
      top="0"
    >
      <Flex
        direction="column"
        align="flex-start"
        justify="center"
        fontSize="48px"
        mt="100px"
      >
        {insurances.map((link, index) => (
          <Box key={index} onClick={onToggle}>
            <Link href={link.href}>
              <a style={{ fontSize: '24px' }}>{link.title}</a>
            </Link>
          </Box>
        ))}
        <Box onClick={onToggle}>
          <Link href="/despre" onClick={onToggle}>
            <a style={{ fontSize: '24px' }}>Despre noi</a>
          </Link>
        </Box>
        <Box onClick={onToggle}>
          <Link href="/blog" onClick={onToggle}>
            <a style={{ fontSize: '24px' }}>Blog</a>
          </Link>
        </Box>
        <Flex align="center" justify="center" w="full" mt="50px">
          <a href="https://www.facebook.com/asigurarideacasa" target="_blank">
            <IconButton
              variant="ghost"
              fontSize="20px"
              size="md"
              mx="10px"
              isRound
              onClick={onToggle}
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
              onClick={onToggle}
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
              onClick={onToggle}
              icon={<FaLinkedin />}
            />
          </a>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Menu;
