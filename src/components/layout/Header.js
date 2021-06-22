import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';
import Logo from '../ui/Logo';
import { useColorMode, IconButton, Flex, Box } from '@chakra-ui/react';
import Dropdown from '../ui/Dropdown';
import { FaBars, FaTimes } from 'react-icons/fa';
import { insurances } from '../../utils/insurances';

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Flex
      align="center"
      justify="space-between"
      position="fixed"
      height="100px"
      width="100%"
      px={{ base: '20px', md: '100px', lg: '100px' }}
      zIndex="10000"
      background={`linear-gradient(180deg, ${
        isDark ? '#171923' : '#FBFBFB '
      } 73.96%, rgba(251, 251, 251, 0) 100%)`}
    >
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box display={{ base: 'none', md: 'block', lg: 'block' }}>
          <Dropdown links={insurances} isDark={isDark} />
        </Box>
        <Box display={{ base: 'none', md: 'block', lg: 'block' }}>
          <Link href="/despre">
            <a>Despre noi</a>
          </Link>
        </Box>
        <Box display={{ base: 'none', md: 'block', lg: 'block' }}>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </Box>
        {/* <Link href="/blog/add">
          <a>Adauga o postare pe blog</a>
        </Link> */}

        <DarkModeSwitch />
        <IconButton
          display={{ base: 'block', md: 'none', lg: 'none' }}
          isRound
          size="md"
          variant="ghost"
          ml="10px"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          icon={isMenuOpen ? <FaTimes /> : <FaBars />}
        />
      </div>
    </Flex>
  );
};

export default Header;
