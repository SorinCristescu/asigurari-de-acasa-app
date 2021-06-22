import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import { styles } from './globalStyles';
const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
  xs: '30em', // 480
  sm: '40em', // 640
  md: '52em', // 832
  lg: '64em', // 1024
  xl: '80em', // 1280
  '2xl': '96em', // 1536
});

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  colors: {
    black: '#0D0D0D',
    white: '#FFF9F2',
    primary: '#4D4DFF',
    primaryDarker: '#3333FF',
    primaryLight: '#CCCCFF',
    primaryLighter: '#F5F5FF',
    grayDark: '#262626',
    grayMedium: '#808080',
    grayLight: '#BFBFBF',
    grayLighter: '#F2F2F2',
    warning: '#FFA822',
    danger: '#F5487F',
    success: '#1AC0C6',
  },
  config,
  styles,
  fonts,
  breakpoints,
  icons: {
    logo: {
      path: (
        <svg
          width="3000"
          height="3163"
          viewBox="0 0 3000 3163"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="3000" height="3162.95" fill="none" />
          <path
            d="M1470.89 1448.81L2170 2488.19H820V706.392H2170L1470.89 1448.81ZM1408.21 1515.37L909.196 2045.3V2393.46H1998.84L1408.21 1515.37Z"
            fill="currentColor"
          />
        </svg>
      ),
      viewBox: '0 0 3000 3163',
    },
  },
});

export default theme;
