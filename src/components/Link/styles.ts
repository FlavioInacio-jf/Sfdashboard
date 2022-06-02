import styled, { css } from 'styled-components';

export interface LinkStyledProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'tertiary' | 'quartenary' | 'grey' | 'light';
  outline?: boolean;
  size?: 'small' | 'large' | '';
  positionIcon?: 'left' | 'right';
  flex?: boolean;
  margin?: string;
  noPadding?: boolean;
}

export const LinkStyled = styled.a<LinkStyledProps>`
  width: ${({ flex = false }) => (flex ? '100%' : 'auto')};

  font-family: ${({ theme }) => theme.font.fontFamily[0]};
  font-size: 1.6rem;
  line-height: 2.08rem;
  font-weight: 400;
  text-align: center;

  white-space: nowrap;
  vertical-align: middle;

  border-radius: 0.5rem;

  display: ${({ flex = false }) => (flex ? 'flex' : 'inline-flex')};
  align-items: center;
  justify-content: center;

  padding: 0.6rem 1.2rem;
  margin: ${({ margin = '' }) => margin || ''};

  transition: all 0.3s ease-in-out;

  ${({ variant, outline, theme }) =>
    variant === 'primary' &&
    css`
      background-color: ${outline ? 'transparent' : `${theme.colours.primary}`};
      color: ${outline ? `${theme.colours.primary}` : `${theme.colours.neutrals.O00}`};
      border: 0.1rem solid ${theme.colours.primary};
    `};

  ${({ variant, outline, theme }) =>
    variant === 'secondary' &&
    css`
      background-color: ${outline ? 'transparent' : `${theme.colours.secondary}`};
      color: ${outline ? `${theme.colours.secondary}` : `${theme.colours.neutrals.O00}`};
      border: 0.1rem solid ${theme.colours.secondary};
    `};

  ${({ variant, outline, theme }) =>
    variant === 'tertiary' &&
    css`
      background-color: ${outline ? 'transparent' : `${theme.colours.tertiary}`};
      color: ${outline ? `${theme.colours.tertiary}` : `${theme.colours.neutrals.O00}`};
      border: 0.1rem solid ${theme.colours.tertiary};
    `};

  ${({ variant, outline, theme }) =>
    variant === 'quartenary' &&
    css`
      background-color: ${outline ? 'transparent' : `${theme.colours.quartenary}`};
      color: ${outline ? `${theme.colours.quartenary}` : `${theme.colours.neutrals.O00}`};
      border: 0.1rem solid ${theme.colours.quartenary};
    `};

  ${({ variant, outline, theme }) =>
    variant === 'danger' &&
    css`
      background-color: ${outline ? 'transparent' : `${theme.colours.red[400]}`};
      color: ${outline ? `${theme.colours.red[400]}` : `${theme.colours.neutrals.O00}`};
      border: 0.1rem solid ${theme.colours.red[400]};
    `};

  ${({ variant, outline, theme }) =>
    variant === 'grey' &&
    css`
      background-color: ${outline ? 'transparent' : `${theme.colours.neutrals[100]}`};
      color: ${outline ? `${theme.colours.neutrals[400]}` : `${theme.colours.neutrals[400]}`};
      border: 0.1rem solid ${theme.colours.neutrals[100]};
    `};
  ${({ variant, outline, theme }) =>
    variant === 'light' &&
    css`
      background-color: ${outline ? 'transparent' : `${theme.colours.neutrals.O00}`};
      color: ${outline ? `${theme.colours.neutrals[700]}` : `${theme.colours.neutrals[700]}`};
      border: 0.1rem solid ${theme.colours.neutrals.O00};
    `};

  ${({ size }) =>
    size === 'small' &&
    css`
      font-size: 1.4rem;
      line-height: 1.82rem;
      padding: 0.4rem 0.8rem;
    `};

  ${({ size }) =>
    size === 'large' &&
    css`
      font-size: 2rem;
      line-height: 2.6rem;
      padding: 0.8rem 1.6rem;
    `};

  ${({ positionIcon }) =>
    positionIcon === 'left' &&
    css`
      svg {
        margin-right: 2rem;
      }
    `};

  ${({ positionIcon }) =>
    positionIcon === 'right' &&
    css`
      svg {
        margin-left: 2rem;
      }
    `};
  &:not(:disabled):hover {
    ${({ variant, outline, theme }) =>
      variant === 'primary' &&
      css`
        background-color: ${outline ? `${theme.colours.primary}` : 'transparent'};
        color: ${outline ? `${theme.colours.neutrals.O00}` : `${theme.colours.primary}`};
        border: 0.1rem solid ${theme.colours.primary};
      `};

    ${({ variant, outline, theme }) =>
      variant === 'secondary' &&
      css`
        background-color: ${outline ? `${theme.colours.secondary}` : 'transparent'};
        color: ${outline ? `${theme.colours.neutrals.O00}` : `${theme.colours.secondary}`};
        border: 0.1rem solid ${theme.colours.secondary};
      `};

    ${({ variant, outline, theme }) =>
      variant === 'tertiary' &&
      css`
        background-color: ${outline ? `${theme.colours.tertiary}` : 'transparent'};
        color: ${outline ? `${theme.colours.neutrals.O00}` : `${theme.colours.tertiary}`};
        border: 0.1rem solid ${theme.colours.tertiary};
      `};

    ${({ variant, outline, theme }) =>
      variant === 'quartenary' &&
      css`
        background-color: ${outline ? `${theme.colours.quartenary}` : 'transparent'};
        color: ${outline ? `${theme.colours.neutrals.O00}` : `${theme.colours.quartenary}`};
        border: 0.1rem solid ${theme.colours.quartenary};
      `};

    ${({ variant, outline, theme }) =>
      variant === 'danger' &&
      css`
        background-color: ${outline ? `${theme.colours.red[400]}` : 'transparent'};
        color: ${outline ? `${theme.colours.neutrals.O00}` : `${theme.colours.red[400]}`};
        border: 0.1rem solid ${theme.colours.red[400]};
      `};

    ${({ variant, outline, theme }) =>
      variant === 'grey' &&
      css`
        background-color: ${outline ? `${theme.colours.neutrals[100]}` : 'transparent'};
        color: ${outline ? `${theme.colours.neutrals[700]}` : `${theme.colours.neutrals[400]}`};
        border: 0.1rem solid ${theme.colours.neutrals[100]};
      `};
  }

  ${({ noPadding }) =>
    noPadding &&
    css`
      padding: 0;
    `}
`;
