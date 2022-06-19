import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 10rem 1fr;
  grid-template-rows: 6.2rem 1fr;
  grid-template-areas: 'sidebar header' 'sidebar content';

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    grid-template-columns: 1fr;
    grid-template-rows: 6.2rem 1fr;
    grid-template-areas: 'header' 'content';
  }
`;

export const Content = styled.div`
  grid-area: content;

  padding: 3rem;
  overflow: hidden auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding: 2rem;
    padding-bottom: 10.2rem;
  }
`;
