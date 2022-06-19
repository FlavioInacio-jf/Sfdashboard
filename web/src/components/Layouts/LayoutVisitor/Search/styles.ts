import styled from 'styled-components';

export const SearchGroup = styled.div`
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 0.1rem solid ${({ theme }) => theme.colours.neutrals[200]};
  border-radius: 0.5rem;
  padding-right: ${({ theme }) => theme.sizes.lg};

  input {
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
