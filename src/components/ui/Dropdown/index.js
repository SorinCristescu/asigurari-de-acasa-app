import React from 'react';
import Link from 'next/link';
import { FaAngleDown } from 'react-icons/fa';
import { useDisclosure, useOutsideClick } from '@chakra-ui/react';
import { Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

const Dropdown = ({ links, isDark }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dropdownRef = React.useRef();
  useOutsideClick({
    ref: dropdownRef,
    handler: () => onClose(),
  });

  return (
    <Menu ref={dropdownRef} width="200px" isOpen={isOpen}>
      <MenuButton
        as={Button}
        borderRadius="0"
        mx="30px"
        variant="link"
        color="#0D0D0D"
        fontWeight="bold"
        color={isDark ? '#FFF9F2' : '#0D0D0D'}
        _hover={{ color: '#3333FF' }}
        _expanded={{ color: '#3333FF' }}
        // _focus={{ bg: '#4D4DFF' }}
        rightIcon={<FaAngleDown />}
        onClick={onOpen}
        //
      >
        Asigurari
      </MenuButton>
      <MenuList
        borderRadius="0"
        border="none"
        bg={isDark ? '#0D0D0D' : '#FFF9F2'}
      >
        {links &&
          links.map((link, index) => (
            <MenuItem key={index} onClick={onClose}>
              <Link href={link.href}>
                <a>{link.title}</a>
              </Link>
            </MenuItem>
          ))}
      </MenuList>
    </Menu>
  );
};

export default Dropdown;
