import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`;

export const FirstContent = styled.section`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 0.5rem;
  padding: 3rem;
`;

export const SecondContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 2rem;

  background-image: linear-gradient(
    to right bottom,
    #00af91,
    #00a589,
    #009a80,
    #009078,
    #008670,
    #00826c,
    #007d69,
    #007965,
    #007965,
    #007965,
    #007965,
    #007965
  );

  @media (max-width: 1080px) {
    display: none;
  }
`;

export const SecondContentDescription = styled.p`
  font-family: ${({ theme }) => theme.font.fontFamily[1]};
  font-size: 2.2rem;
  font-weight: 400;
  text-align: center;
  color: ${({ theme }) => theme.colours.neutrals[100]};

  margin: 3rem 0;
`;

export const Form = styled.form`
  width: 35rem;
`;

export const Brand = styled.h1`
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
