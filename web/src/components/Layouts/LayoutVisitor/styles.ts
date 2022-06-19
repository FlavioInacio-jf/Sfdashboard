import styled from 'styled-components';

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

  border-bottom: 0.5rem solid ${({ theme }) => theme.colours.secondary};

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
