import styled, { css } from 'styled-components';

export interface ColumnStyledProps {
  column?: string;
  sizeColumns?: string;
  justifyItems?: 'center' | 'start' | 'end';
  justifyContent?: 'center' | 'start' | 'end';
  gap?: string;
  margin?: string;
}
export const ColumnStyled = styled.div<ColumnStyledProps>`
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
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  gap: ${({ gap }) => gap || '2rem'};

  margin: ${({ margin }) => margin || '0'};
`;
