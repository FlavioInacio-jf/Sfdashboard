import { createGlobalStyle } from 'styled-components';
import './reset.css';

export default createGlobalStyle`
  html {
    font-size: 62.5%;
    -webkit-text-size-adjust: 62.5%;
    -ms-text-size-adjust: 62.5%;
    -webkit-font-smoothing: antialiased;
  }


  body {
    font: 400 1rem ${({ theme }) => theme.font.fontFamily[0]};
    background-color: ${({ theme }) => theme.colours.neutrals.O00};
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

  .sr-only {
    position: absolute;
    width: 0.1rem;
    height: 0.1rem;
    padding: 0;
    margin: -0.1rem;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  *::-webkit-scrollbar {
    width: .6rem;
    height: .7rem;
  }

  *::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colours.neutrals[100]};
    border-radius: 0.5rem;
  }

  *::-webkit-scrollbar-thumb {
    border-radius: 2rem;
    background: ${({ theme }) => theme.colours.neutrals[300]};
  }
  *::-webkit-scrollbar-button {
    display: none;
  }

`;
