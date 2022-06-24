import styled from 'styled-components';

export const BrandStyled = styled.a`
  flex: 0;

  font-family: ${({ theme }) => theme.font.fontFamily[0]};
  font-size: 3rem;
  font-weight: 500;
  text-align: left;
  color: ${({ theme }) => theme.colours.neutrals.O00};

  cursor: pointer;

  span:first-child {
    font-weight: 700;
    color: ${({ theme }) => theme.colours.secondary};
  }
`;
