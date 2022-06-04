import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colours: {
      primary: string;
      secondary: string;
      tertiary: string;
      quartenary: string;
      neutrals: {
        O00: string;
        O25: string;
        O50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        999: string;
      };
      orange: {
        O00: string;
        999: string;
      };
      red: {
        400: string;
        700: string;
      };
      green: {
        400: string;
        700: string;
      };
    };
    font: {
      fontFamily: string[];
    };
    breakpoint: {
      mobile: string;
      tablet: string;
      laptop: string;
      desktop: string;
    };
  }
}
