import styled, { css } from 'styled-components';

export const Container = styled.nav`
  grid-area: sidebar;

  background-color: ${({ theme }) => theme.colours.primary};
  color: ${({ theme }) => theme.colours.neutrals.O00};
`;

export const Brand = styled.div`
  padding: 2rem 0;

  .brand {
    padding: 0 2rem;

    font-family: ${({ theme }) => theme.font.fontFamily[1]};
    font-size: 2.8rem;
    font-weight: 700;
    text-align: center;

    span:first-child {
      color: ${({ theme }) => theme.colours.quartenary};
    }
  }
`;

export const SidebarListItems = styled.ul`
  padding-top: 2rem;
`;

interface SidebarItemProps {
  isCurrentPage: boolean;
}
export const SidebarItem = styled.li<SidebarItemProps>`
  display: flex;
  justify-content: center;

  font-size: 2.4rem;
  text-align: center;
  color: ${({ theme }) => theme.colours.secondary};

  transition: 0.3s ease-in-out;

  ${({ isCurrentPage }) =>
    isCurrentPage &&
    css`
      color: ${({ theme }) => theme.colours.neutrals.O00};
    `}

  & + & {
    margin-top: 2rem;
  }
`;
