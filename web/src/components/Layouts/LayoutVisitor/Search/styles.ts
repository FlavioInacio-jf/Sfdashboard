import styled from 'styled-components';

export const SearchGroup = styled.div`
  flex: 2;

  max-width: 70rem;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 0.1rem solid ${({ theme }) => theme.colours.neutrals[200]};
  border-radius: 0.5rem;
  padding-right: ${({ theme }) => theme.sizes.lg};

  margin: 0 ${({ theme }) => theme.sizes.xl};

  input {
    width: 100%;
    height: 100%;

    font-family: ${({ theme }) => theme.font.fontFamily[0]};
    font-size: 1.6rem;

    border-radius: 0.5rem;

    padding: 0 ${({ theme }) => theme.sizes.lg};

    transition: all 0.3s ease-in-out;
  }

  input:focus + svg {
    color: ${({ theme }) => theme.colours.neutrals[400]};
  }

  svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.colours.neutrals[200]};
  }
`;
