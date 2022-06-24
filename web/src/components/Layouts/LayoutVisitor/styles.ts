import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: auto;

  background-color: ${({ theme }) => theme.colours.primary};

  margin-bottom: ${({ theme }) => theme.sizes.xxl};
`;

export const Main = styled.main`
  height: 100%;
  min-height: calc(86.4vh - 23.2rem);
`;
