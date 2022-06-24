import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

interface ThemeProps {
  children: ReactNode;
}

export const theme = {
  colours: {
    primary: '#264653',
    secondary: '#2A9D8F',
    tertiary: '#E9C46A',
    quartenary: '#F4A261',
    neutrals: {
      O00: '#FFFFFF',
      O25: '#F5F5F5',
      O50: '#F5F7FA',
      100: '#E4E7EB',
      200: '#CBD2D9',
      300: '#9AA5B1',
      400: '#52667A',
      500: '#313D49',
      600: '#29333D',
      700: '#212931',
      800: '#181F25',
      900: '#101418',
      999: '#080A0C'
    },
    orange: {
      O00: '#FB8469',
      999: '#FA6C4C'
    },
    red: {
      400: '#E76F51',
      700: '#FF4444'
    },
    green: {
      400: '#93E659',
      700: '#329A14'
    }
  },
  font: {
    fontFamily: ['Inter, sans-serif', 'Poppins,  sans-serif']
  },
  breakpoint: {
    mobile: '375px',
    tablet: '780px',
    laptop: '1200px',
    desktop: '1600px'
  },
  sizes: {
    none: '0rem',
    sm: '0.4rem',
    md: '0.8rem',
    lg: '1.6rem',
    xl: '3.2rem',
    xxl: '6.4rem',
    auto: 'auto'
  }
};

export const Theme = ({ children }: ThemeProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
