import { useState } from 'react';
import Link from 'next/link';
import { FaAngleDown } from 'react-icons/fa';

import { Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

const Dropdown = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu width="200px" closeOnSelect={true} isOpen={isOpen}>
      <MenuButton
        as={Button}
        borderRadius="0"
        mx="30px"
        variant="ghost"
        _hover={{ bg: '#3333FF', color: '#FFF9F2' }}
        _expanded={{ bg: '#4D4DFF', color: '#FFF9F2' }}
        // _focus={{ bg: '#4D4DFF' }}
        rightIcon={<FaAngleDown />}
        onClick={() => setIsOpen(!isOpen)}
      >
        Asigurari
      </MenuButton>
      <MenuList borderRadius="0" border="none">
        {links &&
          links.map((link, index) => (
            <MenuItem key={index} onClick={() => setIsOpen(!isOpen)}>
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
