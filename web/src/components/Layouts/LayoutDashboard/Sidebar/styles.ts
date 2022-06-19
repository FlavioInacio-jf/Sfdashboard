import styled, { css } from 'styled-components';

export const Container = styled.nav`
  grid-area: sidebar;

  background-color: ${({ theme }) => theme.colours.primary};
  color: ${({ theme }) => theme.colours.neutrals.O00};

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 100%;
    height: 8rem;

    position: fixed;
    left: 0;
    bottom: 0;
  }
`;

export const Brand = styled.div`
  cursor: pointer;

  padding: 2rem 0;

  .brand {
    display: block;

    padding: 0 2rem;

    font-family: ${({ theme }) => theme.font.fontFamily[1]};
    font-size: 2.8rem;
    font-weight: 700;
    text-align: center;

    cursor: pointer;

    span:first-child {
      color: ${({ theme }) => theme.colours.quartenary};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    display: none;
  }
`;

export const SidebarListItems = styled.ul`
  height: calc(100vh - 114px);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding-top: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    height: auto;

    display: flex;
    flex-direction: row;

    justify-content: center;

    gap: 2rem;
    padding: 2rem 0;
  }
`;

export const SidebarItem = styled.li<{ isActive: boolean }>`
  display: flex;
  justify-content: center;

  transition: 0.3s ease-in-out;

  & + & {
    margin-top: auto;
  }
  a {
    display: flex;
    justify-content: center;
    flex-direction: column;

    font-size: 2.4rem;
    text-align: center;
    color: ${({ theme }) => theme.colours.secondary};
  }
  ${({ isActive }) =>
    isActive &&
    css`
      a {
        color: ${({ theme }) => theme.colours.neutrals.O00};
      }
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    & + & {
      margin-top: 0;
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .sr-only {
      position: relative;
      width: auto;
      height: auto;

      font-size: 1.5rem;
      font-weight: 600;

      margin: 0rem;
      margin-top: 0.5rem;
    }
  }
`;
