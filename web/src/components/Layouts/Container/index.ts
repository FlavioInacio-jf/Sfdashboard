import styled, { css } from 'styled-components';

interface ContainerProps {
  h?: '25%' | '50%' | '75%' | '100%' | 'auto';
  d?: 'flex' | 'block' | 'inline-flex' | 'inline-block';
  pY?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'auto' | 'none';
  pX?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'auto' | 'none';
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

  ${({ pY, theme }) =>
    pY &&
    css`
      padding-top: ${theme.sizes[pY]};
      padding-bottom: ${theme.sizes[pY]};
    `};
  ${({ pX, theme }) =>
    pX &&
    css`
      padding-top: ${theme.sizes[pX]};
      padding-bottom: ${theme.sizes[pX]};
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
