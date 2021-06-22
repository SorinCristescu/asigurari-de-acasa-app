import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import { Flex } from '@chakra-ui/react';
import Dropdown from '../ui/Dropdown';
import { insurances } from '../../utils/insurances';

const Menu = ({ setIsMenuOpen, isMenuOpen, bgColor, colorMode, color }) => {
  const menuRef = useRef(null);
  useEffect(() => {
    if (isMenuOpen) {
      gsap.fromTo(
        [menuRef.current],
        {
          x: '-100%',
          opacity: 0,
        },
        {
          duration: 0.8,
          x: '0',
          opacity: 1,
          ease: 'power3.inOut',
          // stagger: {
          //   amount: 0.8,
          // },
        }
      );
    } else {
      gsap.fromTo(
        [menuRef.current],
        {
          x: '0%',
          opacity: 1,
        },
        {
          duration: 1.5,
          x: '-100%',
          opacity: 0,
          ease: 'power3.inOut',
          // stagger: {
          //   amount: 0.8,
          // },
        }
      );
    }
  }, [isMenuOpen, menuRef]);
  return (
    <Flex
      ref={menuRef}
      width="100%"
      height="100vh"
      position="fixed"
      top="0"
      left="0"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      align="center"
      justify="center"
      zIndex="1"
    >
      <Flex
        direction="column"
        align="flex-start"
        justify="center"
        fontSize="48px"
      >
        <Link href="/asigurare-rca" onClick={() => setIsMenuOpen(isMenuOpen)}>
          <a style={{ fontSize: '18px' }}>Asigurare RCA</a>
        </Link>
        <Link href="/asigurare-casco" onClick={() => setIsMenuOpen(isMenuOpen)}>
          <a style={{ fontSize: '18px' }}>Asigurare CASCO</a>
        </Link>
        <Link
          href="/asigurare-de-viata"
          onClick={() => setIsMenuOpen(isMenuOpen)}
        >
          <a style={{ fontSize: '18px' }}>Asigurare de viata</a>
        </Link>
        <Link
          href="/asigurare-de-transport"
          onClick={() => setIsMenuOpen(isMenuOpen)}
        >
          <a style={{ fontSize: '18px' }}>Asigurare de transport</a>
        </Link>
        <Link href="/asigurare-pad" onClick={() => setIsMenuOpen(isMenuOpen)}>
          <a style={{ fontSize: '18px' }}>Asigurare PAD</a>
        </Link>
        <Link
          href="/asigurare-de-locuinta"
          onClick={() => setIsMenuOpen(isMenuOpen)}
        >
          <a style={{ fontSize: '18px' }}>Asigurare de locuinta</a>
        </Link>
        <Link
          href="/asigurare-de-sanatate"
          onClick={() => setIsMenuOpen(isMenuOpen)}
        >
          <a style={{ fontSize: '18px' }}>Asigurare de sanatate</a>
        </Link>
        <Link
          href="/asigurare-de-accidente"
          onClick={() => setIsMenuOpen(isMenuOpen)}
        >
          <a style={{ fontSize: '18px' }}>Asigurare de accidente</a>
        </Link>
        <Link href="/despre" onClick={() => setIsMenuOpen(isMenuOpen)}>
          <a style={{ fontSize: '18px' }}>Despre noi</a>
        </Link>
        <Link href="/blog" onClick={() => setIsMenuOpen(isMenuOpen)}>
          <a style={{ fontSize: '18px' }}>Blog</a>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Menu;
