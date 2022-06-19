import styled from 'styled-components';

export const BrandStyled = styled.h1`
  font-family: ${({ theme }) => theme.font.fontFamily[0]};
  font-size: 3rem;
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.colours.primary};

  span:first-child {
    font-weight: 700;
  }
`;
