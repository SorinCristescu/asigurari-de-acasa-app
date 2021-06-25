import { useContext, useEffect, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';
import AuthContext from '../../context/AuthContext';
import Logo from '../ui/Logo';
import { useColorMode, IconButton, Flex, Box, Button } from '@chakra-ui/react';
import Dropdown from '../ui/Dropdown';
import { FaBars, FaTimes } from 'react-icons/fa';
import { insurances } from '../../utils/insurances';

const Header = ({ isMenuOpen, onToggle, onClose }) => {
  const { user, logout } = useContext(AuthContext);
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const logoRef = useRef(null);
  const link1Ref = useRef(null);
  const link2Ref = useRef(null);
  const link3Ref = useRef(null);
  const link4Ref = useRef(null);
  const signinRef = useRef(null);
  const signoutRef = useRef(null);
  const themeRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [
        logoRef.current,
        link1Ref.current,
        link2Ref.current,
        link3Ref.current,
        link4Ref.current,
        signinRef.current,
        signoutRef.current,
        themeRef.current,
        menuRef.current,
      ],
      {
        y: '-20px',
        opacity: 0,
      },
      {
        duration: 1,
        y: '0px',
        opacity: 1,
        ease: 'power3.inOut',
        stagger: {
          amount: 0.5,
        },
      }
    );
  }, [
    logoRef,
    link1Ref,
    link2Ref,
    link3Ref,
    link4Ref,
    signinRef,
    signoutRef,
    themeRef,
    menuRef,
  ]);

  return (
    <Flex
      align="center"
      justify="space-between"
      position="fixed"
      height="100px"
      width="100%"
      px={{ base: '20px', md: '100px', lg: '100px' }}
      zIndex="100"
      background={isDark ? '#171923' : '#FBFBFB '}
    >
      <Box ref={logoRef} onClick={onClose}>
        <Link href="/">
          <a>
            <Logo isAnimated />
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
          <Box ref={link1Ref}>
            <Dropdown links={insurances} isDark={isDark} />
          </Box>
          <Box ref={link2Ref}>
            <Link href="/despre">
              <a>Despre noi</a>
            </Link>
          </Box>
          <Box ref={link3Ref}>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </Box>
          {user && (
            <Box ref={link4Ref}>
              <Link href="/dashboard">
                <a>Dashboard</a>
              </Link>
            </Box>
          )}

          {!user ? (
            <Box ref={signinRef}>
              <Link href="/signin">
                <a>Login</a>
              </Link>
            </Box>
          ) : (
            <Box ref={signoutRef} onClick={() => logout()}>
              <Link href="/signin">
                <a>Logout</a>
              </Link>
            </Box>
          )}
        </Flex>
        <Box ref={themeRef}>
          <DarkModeSwitch />
        </Box>
        <IconButton
          ref={menuRef}
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
