import styled, { css } from 'styled-components';

interface ContainerProps {
  h?: '25%' | '50%' | '75%' | '100%' | 'auto';
  d?: 'flex' | 'block' | 'inline-flex' | 'inline-block';
  justifyContent?: 'start' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  alignItems?: 'stretch' | 'center' | 'start' | 'end';
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: 124rem;

  padding: 0 1.6rem;

  ${({ h }) =>
    h &&
    css`
      height: ${h};
    `};

  margin: 0 auto;

  ${({ d }) =>
    d &&
    css`
      display: ${d};
    `};

  ${({ justifyContent }) =>
    justifyContent &&
    css`
      justify-content: ${justifyContent};
    `};

  ${({ alignItems }) =>
    alignItems &&
    css`
      align-items: ${alignItems};
    `};

  ${({ flexDirection }) =>
    flexDirection &&
    css`
      flex-direction: ${flexDirection};
    `};
`;
