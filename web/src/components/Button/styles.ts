import styled, { css } from 'styled-components';

export interface ButtonStyledProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'tertiary' | 'quartenary' | 'grey';
  size?: 'sm' | 'md' | 'lg';
  positionIcon?: 'left' | 'right';
  outline?: boolean;
  w?: '25%' | '50%' | '75%' | '100%' | 'auto';
  h?: '25%' | '50%' | '75%' | '100%' | 'auto';
  m?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'auto';
  mX?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'auto';
  mY?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'auto';
  mT?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'auto';
  mL?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'auto';
  mR?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'auto';
  mB?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'auto';
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'pill' | 'circle' | 'none';
  border?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'none';
  d?: 'block' | 'inline-block' | 'inline' | 'flex' | 'inline-flex' | 'none';
}

const roundedSize = {
  none: '0',
  sm: '0.4rem',
  md: '0.6rem',
  lg: '0.5rem',
  xl: '1rem',
  xxl: '2rem',
  pill: '50rem',
  circle: '50%'
};
const borderSize = {
  none: '0',
  sm: '0.1rem',
  md: '0.2rem',
  lg: '0.3rem',
  xl: '0.4rem',
  xxl: '0.5rem'
};
const sizes = {
  sm: '0.4rem',
  md: '0.8rem',
  lg: '1.6rem',
  xl: '3.2rem',
  xxl: '6.4rem',
  auto: 'auto'
};

export const ButtonStyled = styled.button<ButtonStyledProps>`
  font-family: ${({ theme }) => theme.font.fontFamily[0]};
  font-size: 1.6rem;
  line-height: 2.08rem;
  font-weight: 400;
  text-align: center;

  white-space: nowrap;
  vertical-align: middle;

  border-radius: 0.5rem;

  align-items: center;
  justify-content: center;

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

  ${({ size }) =>
    size === 'sm' &&
    css`
      font-size: 1.4rem;
      padding: 0.4rem 0.8rem;
      height: 2.6rem;
    `};

  ${({ size }) =>
    size === 'md' &&
    css`
      font-size: 1.6rem;
      padding: 0.8rem 1.6rem;
      height: 4.2rem;
    `};

  ${({ size }) =>
    size === 'lg' &&
    css`
      font-size: 1.8rem;
      padding: 1.2rem 2.4rem;
      height: 5.8rem;
    `};

  ${({ positionIcon }) =>
    positionIcon === 'left' &&
    css`
      svg {
        margin-right: 0.8rem;
      }
    `};

  ${({ positionIcon }) =>
    positionIcon === 'right' &&
    css`
      svg {
        margin-left: 0.8rem;
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

  ${({ d = 'inline-flex' }) =>
    d &&
    css`
      display: ${d};
    `};

  ${({ w }) =>
    w &&
    css`
      width: ${w};
    `};

  ${({ h }) =>
    h &&
    css`
      height: ${h};
    `};

  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: ${roundedSize[rounded]};
    `};

  ${({ border }) =>
    border &&
    css`
      border-width: ${borderSize[border]};
    `};

  //Margins

  ${({ mX }) =>
    mX &&
    css`
      margin-left: ${sizes[mX]};
      margin-right: ${sizes[mX]};
    `};

  ${({ mY }) =>
    mY &&
    css`
      margin-top: ${sizes[mY]};
      margin-bottom: ${sizes[mY]};
    `};

  ${({ mB }) =>
    mB &&
    css`
      margin-bottom: ${sizes[mB]};
    `};

  ${({ mT }) =>
    mT &&
    css`
      margin-top: ${sizes[mT]};
    `};

  ${({ mR }) =>
    mR &&
    css`
      margin-right: ${sizes[mR]};
    `};

  ${({ mL }) =>
    mL &&
    css`
      margin-left: ${sizes[mL]};
    `};

  &:disabled {
    cursor: default;
    opacity: 0.65;
  }
`;
