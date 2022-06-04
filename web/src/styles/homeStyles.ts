import styled from 'styled-components';

export const Form = styled.form`
  width: 35rem;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
    width: calc(min(45rem, 100%));
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 100%;
  }
`;
