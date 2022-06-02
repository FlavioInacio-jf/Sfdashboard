import styled from 'styled-components';

export const Container = styled.header`
  grid-area: header;

  display: flex;
  justify-content: space-between;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colours.neutrals[100]};

  padding: 1rem 3rem;
`;

export const Search = styled.div`
  min-width: 23rem;
  height: 4rem;

  display: flex;
  align-items: center;

  border: 0.1rem solid ${({ theme }) => theme.colours.neutrals[100]};
  border-radius: 0.5rem;

  font-size: 1.6rem;

  padding: 0 1.5rem;
  padding-right: 0;

  input {
    width: 100%;

    font-family: ${({ theme }) => theme.font.fontFamily[0]};

    color: ${({ theme }) => theme.colours.neutrals[999]};
  }
  svg {
    color: ${({ theme }) => theme.colours.neutrals[400]};
    margin-right: 1rem;
  }
`;

export const HeaderWrapperActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderAvatar = styled.div`
  margin-left: 2rem;

  font-size: 3.2rem;
  cursor: pointer;

  img {
    width: 3.2rem;
    height: 3.2rem;
  }

  clip-path: circle();

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    display: none;
  }
`;

export const MenuMobileButton = styled.button`
  font-size: 2.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    display: none;
  }
`;
