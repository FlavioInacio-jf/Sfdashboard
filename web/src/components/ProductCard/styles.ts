import styled from 'styled-components';

export interface ProductCardContainerProps {
  width?: string;
}
export const ProductCardContainer = styled.div<ProductCardContainerProps>`
  width: ${({ width }) => width || 'auto'};
  max-width: 27rem;
  height: 35rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  border: 0.1rem solid ${({ theme }) => theme.colours.neutrals[100]};
  border-radius: 0.5rem;

  cursor: pointer;

  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    max-width: calc(min(35rem, 100%));
    height: 38rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    max-width: 100%;
  }
`;

export const ProductCardHeader = styled.header`
  width: 100%;
  height: 20rem;

  cursor: pointer;

  margin-bottom: 1rem;

  img {
    width: 100%;
    height: 100%;

    aspect-ratio: 2/1;
    border-radius: 0.5rem 0.5rem 0 0;
    object-fit: cover;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    height: 23rem;
  }
`;

export const ProductCardBody = styled.div`
  width: 100%;

  padding: 1rem;

  > p {
    font-family: ${({ theme }) => theme.font.fontFamily[0]};
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colours.neutrals[400]};
    max-width: 22rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }

  h1 {
    overflow: hidden;
    white-space: nowrap;
  }
  > span {
    width: 100%;

    font-family: ${({ theme }) => theme.font.fontFamily[0]};
    font-size: 2rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colours.tertiary};
  }
`;

export const ProductCardFooter = styled.footer`
  border-radius: 0 0 0.5rem 0.5rem;

  padding: 0 1rem;
`;
