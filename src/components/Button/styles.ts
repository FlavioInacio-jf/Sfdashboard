import styled, { css } from 'styled-components';

export interface ButtonStyledProps {
  primary?: boolean;
  secondary?: boolean;
  danger?: boolean;
  success?: boolean;
  tertirary?: boolean;
  quartenary?: boolean;
  outline?: boolean;
  small?: boolean;
  large?: boolean;
  hasIconLeft?: boolean;
  hasIconRight?: boolean;
  flex?: boolean;
  margin?: string;
  noPadding?: boolean;
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  width: ${({ flex = false }) => (flex ? '100%' : 'auto')};

  font-family: ${({ theme }) => theme.font.fontFamily[0]};
  font-size: 1.6rem;
  line-height: 2.08rem;
  font-weight: 400;

  white-space: nowrap;
  vertical-align: middle;

  border-radius: 0.5rem;

  display: ${({ flex = false }) => (flex ? 'flex' : 'inline-flex')};
  align-items: center;

  padding: 0.6rem 1.2rem;
  margin: ${({ margin = '' }) => margin || ''};

  transition: all 0.3s ease-in-out;

  ${({ primary, outline, theme }) =>
    primary &&
    css`
      background-color: ${outline ? 'transparent' : `${theme.colours.primary}`};
      color: ${outline ? `${theme.colours.primary}` : `${theme.colours.neutrals.O00}`};
      border: 0.1rem solid ${theme.colours.primary};
    `};

  ${({ secondary, outline, theme }) =>
    secondary &&
    css`
      background-color: ${outline ? 'transparent' : `${theme.colours.secondary}`};
      color: ${outline ? `${theme.colours.secondary}` : `${theme.colours.neutrals.O00}`};
      border: 0.1rem solid ${theme.colours.secondary};
    `};

  ${({ tertirary, outline, theme }) =>
    tertirary &&
    css`
      background-color: ${outline ? 'transparent' : `${theme.colours.tertirary}`};
      color: ${outline ? `${theme.colours.tertirary}` : `${theme.colours.neutrals.O00}`};
      border: 0.1rem solid ${theme.colours.tertirary};
    `};

  ${({ quartenary, outline, theme }) =>
    quartenary &&
    css`
      background-color: ${outline ? 'transparent' : `${theme.colours.quartenary}`};
      color: ${outline ? `${theme.colours.quartenary}` : `${theme.colours.neutrals.O00}`};
      border: 0.1rem solid ${theme.colours.quartenary};
    `};

  ${({ danger, outline, theme }) =>
    danger &&
    css`
      background-color: ${outline ? 'transparent' : `${theme.colours.red[400]}`};
      color: ${outline ? `${theme.colours.red[400]}` : `${theme.colours.neutrals.O00}`};
      border: 0.1rem solid ${theme.colours.red[400]};
    `};

  ${({ small }) =>
    small &&
    css`
      font-size: 1.4rem;
      line-height: 1.82rem;
      padding: 0.4rem 0.8rem;
    `};

  ${({ large }) =>
    large &&
    css`
      font-size: 2rem;
      line-height: 2.6rem;
      padding: 0.8rem 1.6rem;
    `};

  ${({ hasIconLeft }) =>
    hasIconLeft &&
    css`
      svg {
        margin-right: 2rem;
      }
    `};

  ${({ hasIconRight }) =>
    hasIconRight &&
    css`
      svg {
        margin-left: 2rem;
      }
    `};
  &:not(:disabled):hover {
    ${({ primary, outline, theme }) =>
      primary &&
      css`
        background-color: ${outline ? `${theme.colours.primary}` : 'transparent'};
        color: ${outline ? `${theme.colours.neutrals.O00}` : `${theme.colours.primary}`};
        border: 0.1rem solid ${theme.colours.primary};
      `};

    ${({ secondary, outline, theme }) =>
      secondary &&
      css`
        background-color: ${outline ? `${theme.colours.secondary}` : 'transparent'};
        color: ${outline ? `${theme.colours.neutrals.O00}` : `${theme.colours.secondary}`};
        border: 0.1rem solid ${theme.colours.secondary};
      `};

    ${({ tertirary, outline, theme }) =>
      tertirary &&
      css`
        background-color: ${outline ? `${theme.colours.tertirary}` : 'transparent'};
        color: ${outline ? `${theme.colours.neutrals.O00}` : `${theme.colours.tertirary}`};
        border: 0.1rem solid ${theme.colours.tertirary};
      `};

    ${({ quartenary, outline, theme }) =>
      quartenary &&
      css`
        background-color: ${outline ? `${theme.colours.quartenary}` : 'transparent'};
        color: ${outline ? `${theme.colours.neutrals.O00}` : `${theme.colours.quartenary}`};
        border: 0.1rem solid ${theme.colours.quartenary};
      `};

    ${({ danger, outline, theme }) =>
      danger &&
      css`
        background-color: ${outline ? `${theme.colours.red[400]}` : 'transparent'};
        color: ${outline ? `${theme.colours.neutrals.O00}` : `${theme.colours.red[400]}`};
        border: 0.1rem solid ${theme.colours.red[400]};
      `};
  }

  ${({ noPadding }) =>
    noPadding &&
    css`
      padding: 0;
    `}

  &:disabled {
    cursor: default;
    opacity: 0.65;
  }
`;
