import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: auto;

  background-color: ${({ theme }) => theme.colours.primary};

  margin-bottom: ${({ theme }) => theme.sizes.xxl};
`;

export const NavBar = styled.nav`
  background-color: ${({ theme }) => theme.colours.neutrals.O00};
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;

  font-size: 1.2rem;
  font-family: ${({ theme }) => theme.font.fontFamily[0]};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colours.neutrals[500]};

  padding: ${({ theme }) => theme.sizes.lg} ${({ theme }) => theme.sizes.md};

  a {
    display: inline-block;
    height: 100%;
  }

  a + a {
    margin-left: ${({ theme }) => theme.sizes.lg};
  }
`;

export const Main = styled.main`
  height: 100%;
  min-height: calc(86.4vh - 23.2rem);
`;
