import styled, { css } from 'styled-components';

export interface TitleStyledProps {
  font?: 'poppins' | 'inter';
  weight?: '400' | '500' | '600' | '700';
  variant?: 'primary' | 'danger' | 'grey' | 'light';
  size?: 'small' | 'large' | 'extraLarge';
  align?: 'center' | 'left' | 'right';
  uppercase?: boolean;
  mxAuto?: boolean;
}
export const TitleStyled = styled.h1<TitleStyledProps>`
  ${({ font, theme }) =>
    font === 'inter'
      ? css`
          font-family: ${theme.font.fontFamily[0]};
        `
      : css`
          font-family: ${theme.font.fontFamily[1]};
        `};
  font-weight: ${({ weight }) => weight};
  font-size: 1.6rem;
  line-height: 2.08rem;
  text-align: ${({ align }) => align};
  color: ${({ theme }) => theme.colours.neutrals[600]};

  ${({ uppercase }) =>
    uppercase &&
    css`
      text-transform: uppercase;
    `};

  ${({ size }) =>
    size === 'small' &&
    css`
      font-size: 1.4rem;
      line-height: 1.82rem;
    `};

  ${({ size }) =>
    size === 'large' &&
    css`
      font-size: 2.4rem;
      line-height: 3.12rem;
    `};

  ${({ size }) =>
    size === 'extraLarge' &&
    css`
      font-size: 2.8rem;
      line-height: 3.64rem;
    `};

  ${({ variant, theme }) =>
    variant === 'primary' &&
    css`
      color: ${theme.colours.primary};
    `};
  ${({ variant, theme }) =>
    variant === 'danger' &&
    css`
      color: ${theme.colours.red[400]};
    `};

  ${({ variant, theme }) =>
    variant === 'grey' &&
    css`
      color: ${theme.colours.neutrals[400]};
    `};

  ${({ variant, theme }) =>
    variant === 'light' &&
    css`
      color: ${theme.colours.neutrals.O00};
    `};

  ${({ mxAuto }) =>
    mxAuto &&
    css`
      display: inline-block;
      margin: 0 auto;
    `}
`;
