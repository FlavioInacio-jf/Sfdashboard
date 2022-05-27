import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    -webkit-text-size-adjust: 62.5%;
    -ms-text-size-adjust: 62.5%;
    -webkit-font-smoothing: antialiased;
  }

  html,
    body {
    font: 400 1rem ${({ theme }) => theme.font.fontFamily[0]};
    background-color: var(--color-white);
    height: 100vh;
    scroll-behavior: smooth;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  img {
    max-width: 100%;
    display: block;
  }

`;
