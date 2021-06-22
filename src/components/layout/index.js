import { useState } from 'react';
import { Flex, useColorMode } from '@chakra-ui/react';
import Main from './Main';
import Footer from './Footer';
import Header from './Header';
import Menu from './Menu';

const Layout = (props) => {
  const { colorMode } = useColorMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const bgColor = { light: 'gray.50', dark: 'gray.900' };
  const color = { light: 'black', dark: 'white' };

  return (
    <Flex
      direction="column"
      alignItems="center"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      position="relative"
      {...props}
    >
      <Header setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <Menu
        color={color}
        bgColor={bgColor}
        colorMode={colorMode}
        setIsMenuOpen={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
      />
      <Main>{props.children}</Main>
      <Footer />
    </Flex>
  );
};

export default Layout;
