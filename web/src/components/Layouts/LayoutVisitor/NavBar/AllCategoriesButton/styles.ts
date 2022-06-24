import styled from 'styled-components';

export const NavBarButton = styled.button`
  font-size: 1.4rem;
  font-weight: 600;
  font-family: inherit;

  display: flex;
  align-items: center;

  svg {
    margin-right: ${({ theme }) => theme.sizes.md};
  }
`;
