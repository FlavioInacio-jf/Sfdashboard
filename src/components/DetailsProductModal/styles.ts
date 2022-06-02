import styled from 'styled-components';
export const Container = styled.div`
  height: 60rem;

  overflow: hidden;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    height: 80vh;
  }
`;

export const OverflowVertical = styled.div`
  height: 50rem;
  overflow: hidden auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    height: auto;
  }
`;

export const DetailsProductHeader = styled.header`
  width: 100%;
  height: 40rem;

  img {
    aspect-ratio: 2/1;
    object-fit: cover;
    height: 100%;
  }
`;

export const DetailsProductBody = styled.div`
  flex: 1;

  width: 100%;
  padding: 3rem;

  > p {
    font-family: ${({ theme }) => theme.font.fontFamily[0]};
    font-size: 1.6rem;
    line-height: 2.08rem;
    color: ${({ theme }) => theme.colours.neutrals[400]};

    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  h1 {
    white-space: normal;
    word-break: break-all;
  }
  span:first-child {
    width: 100%;

    display: block;

    font-family: ${({ theme }) => theme.font.fontFamily[0]};
    font-size: 2.4rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colours.tertiary};
  }
`;

export const DetailsProductFooter = styled.footer`
  flex: 0;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${({ theme }) => theme.colours.neutrals.O00};
  border-top: 0.1rem solid ${({ theme }) => theme.colours.neutrals.O50};

  padding: 2.7rem 3rem;

  .price {
    font-size: 2.4rem;
    line-height: 3.12rem;
    font-weight: 700;

    color: ${({ theme }) => theme.colours.neutrals[600]};
  }
  .amount {
    background: ${({ theme }) => theme.colours.primary};

    font-size: 2rem;
    line-height: 2.6rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colours.neutrals.O00};

    border-radius: 0.3rem;

    padding: 1rem;
  }
`;
