import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';
import Logo from '../ui/Logo';
import { useColorMode } from '@chakra-ui/react';
import Dropdown from '../ui/Dropdown';
import { insurances } from '../../utils/insurances';

const Header = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'fixed',

        height: '100px',
        width: '100%',
        padding: '0 100px',
        zIndex: 10000,
        background: `linear-gradient(180deg, ${
          isDark ? '#171923' : '#FBFBFB '
        } 73.96%, rgba(251, 251, 251, 0) 100%)`,
      }}
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
        <Dropdown links={insurances} isDark={isDark} />

        <Link href="/despre">
          <a>Despre noi</a>
        </Link>

        <Link href="/blog">
          <a>Blog</a>
        </Link>

        {/* <Link href="/blog/add">
          <a>Adauga o postare pe blog</a>
        </Link> */}

        <DarkModeSwitch />
      </div>
    </div>
  );
};

export default Header;
