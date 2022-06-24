import styled from 'styled-components';

export const Nav = styled.ul`
  background-color: ${({ theme }) => theme.colours.neutrals.O00};
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;

  padding: ${({ theme }) => theme.sizes.lg} ${({ theme }) => theme.sizes.md};
`;

export const NavBarItem = styled.li`
  font-family: ${({ theme }) => theme.font.fontFamily[0]};
  font-size: 1.2rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colours.neutrals[500]};

  & + & {
    margin-left: ${({ theme }) => theme.sizes.lg};
  }
`;
