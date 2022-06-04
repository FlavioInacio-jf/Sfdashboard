import styled from 'styled-components';

export const BrandStyled = styled.h1`
  font-family: ${({ theme }) => theme.font.fontFamily[1]};
  font-size: 3.4rem;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.colours.primary};

  margin-bottom: 3rem;

  span:first-child {
    color: ${({ theme }) => theme.colours.quartenary};
  }
`;
