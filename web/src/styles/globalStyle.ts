import { createGlobalStyle } from 'styled-components';

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
    height: 100%;

    display: block;
  }
  .overlay-modal {
    background-color: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 1000;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
      align-items: flex-end;
    }
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
