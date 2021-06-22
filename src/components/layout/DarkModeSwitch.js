import { useColorMode, IconButton } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton onClick={toggleColorMode} variant="ghost" isRound>
      {colorMode === 'dark' ? <FaSun /> : <FaMoon />}
    </IconButton>
  );
};

export default DarkModeSwitch;
