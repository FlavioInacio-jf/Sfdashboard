import styled from 'styled-components';

export const ContainerSigInButton = styled.button`
  flex: 0;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  font-size: 1.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colours.primary};

  > span {
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    white-space: nowrap;

    span {
      margin-top: ${({ theme }) => theme.sizes.sm};
    }
  }

  svg {
    font-size: 3rem;
    margin-right: ${({ theme }) => theme.sizes.md};
  }
`;
