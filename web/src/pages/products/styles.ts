import styled from 'styled-components';

export const ContainerProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  padding-top: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    justify-content: center;
  }
`;
