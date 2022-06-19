import styled, { css } from 'styled-components';

interface ContainerProps {
  h?: '25%' | '50%' | '75%' | '100%' | 'auto';
  d?: 'flex' | 'block' | 'inline-flex' | 'inline-block';
  justifyContent?: 'start' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  alignItems?: 'stretch' | 'center' | 'start' | 'end';
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
}
export const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: 128rem;

  ${({ h }) =>
    h &&
    css`
      height: ${h};
    `};

  margin: 0 auto;

  ${({ d }) =>
    d &&
    css`
      display: ${d};
    `};

  ${({ justifyContent }) =>
    justifyContent &&
    css`
      justify-content: ${justifyContent};
    `};

  ${({ alignItems }) =>
    alignItems &&
    css`
      align-items: ${alignItems};
    `};

  ${({ flexDirection }) =>
    flexDirection &&
    css`
      flex-direction: ${flexDirection};
    `};
`;

export const Header = styled.header`
  width: 100%;
  height: 15rem;
`;

export const NavBar = styled.nav`
  background-color: ${({ theme }) => theme.colours.primary};

  font-size: 1.2rem;
  font-family: ${({ theme }) => theme.font.fontFamily[0]};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colours.neutrals.O00};

  padding: ${({ theme }) => theme.sizes.lg} ${({ theme }) => theme.sizes.md};

  a {
    display: inline-block;
    height: 100%;
  }

  a + a {
    margin-left: ${({ theme }) => theme.sizes.lg};
  }
`;

export const Footer = styled.footer``;

export const Brand = styled.h1`
  font-family: ${({ theme }) => theme.font.fontFamily[1]};
  font-size: 3.4rem;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.colours.primary};

  margin-bottom: 3rem;

  span:first-child {
    color: ${({ theme }) => theme.colours.quartenary};
  }
`;
