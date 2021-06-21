import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';
import Logo from '../ui/Logo';
import { useColorMode } from '@chakra-ui/react';

import { Select as ChakraSelect, FormControl, Text } from '@chakra-ui/react';
import { insurances } from '../../utils/insurances';

const Header = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const [link, setLink] = useState('');
  const router = useRouter();

  useEffect(() => {
    router.push(link);
  }, [link]);

  const handleLink = (e) => {
    setLink(e.target.value);
  };
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
        <Link href="/despre">
          <a>Despre noi</a>
        </Link>

        {/* <FormControl> */}
        <ChakraSelect
          width="200px"
          mx="10px"
          placeholder="Tip de asigurare"
          size="md"
          variant="unstyled"
          // fontSize={fontSize}
          // fontWeight={fontWeight}
          // onClick={handleLink}
          onChange={handleLink}
          value={link}
        >
          {insurances.map((option, index) => (
            <option key={index} value={option.value}>
              {option.title}
            </option>
          ))}
        </ChakraSelect>
        {/* </FormControl> */}

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
