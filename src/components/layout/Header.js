import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';
import Logo from '../ui/Logo';
import { useColorMode, IconButton, Flex, Box } from '@chakra-ui/react';
import Dropdown from '../ui/Dropdown';
import { FaBars, FaTimes } from 'react-icons/fa';
import { insurances } from '../../utils/insurances';

const Header = ({ isMenuOpen, onToggle, onClose }) => {
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
      zIndex="1000"
      background={isDark ? '#171923' : '#FBFBFB '}
    >
      <Box onClick={onClose}>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
      </Box>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Flex
          display={{ base: 'none', md: 'flex', lg: 'flex' }}
          align="center"
          justify="space-between"
        >
          <Dropdown links={insurances} isDark={isDark} />

          <Link href="/despre">
            <a>Despre noi</a>
          </Link>

          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </Flex>
        {/* <Link href="/blog/add">
          <a>Adauga o postare pe blog</a>
        </Link> */}

        <DarkModeSwitch />
        <IconButton
          display={{ base: 'flex', md: 'none', lg: 'none' }}
          isRound
          size="md"
          variant="ghost"
          ml="10px"
          onClick={onToggle}
          icon={isMenuOpen ? <FaTimes /> : <FaBars />}
        />
      </div>
    </Flex>
  );
};

export default Header;
