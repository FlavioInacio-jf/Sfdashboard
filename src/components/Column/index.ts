import styled, { css } from 'styled-components';

interface ColumnProps {
  column?: string;
  sizeColumns?: string;
  justifyItems?: 'center' | 'start' | 'end';
  justifyIContent?: 'center' | 'start' | 'end';
  margin?: string;
}
export const Column = styled.div<ColumnProps>`
  width: 100%;

  display: grid;
  ${({ column }) =>
    column &&
    css`
      grid-template-columns: repeat(${column}, 1fr);
    `};
  ${({ sizeColumns }) =>
    sizeColumns &&
    css`
      grid-template-columns: ${sizeColumns};
    `};
  justify-items: ${({ justifyItems }) => justifyItems || 'center'};
  justify-content: ${({ justifyIContent }) => justifyIContent || 'center'};
  gap: 2rem;

  margin: ${({ margin }) => margin || '0'};
`;
