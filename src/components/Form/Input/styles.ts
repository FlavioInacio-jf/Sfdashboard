import styled from 'styled-components';

export interface FormGroupProps {
  margin?: string;
}

export const FormGroup = styled.div<FormGroupProps>`
  width: 100%;

  position: relative;

  margin-top: ${({ margin }) => margin || '0'};
`;

export const Label = styled.label`
  display: inline-block;

  font-family: ${({ theme }) => theme.font.fontFamily[0]};
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.82rem;
  color: ${({ theme }) => theme.colours.neutrals[900]};

  margin-bottom: 0.5rem;

  span {
    color: ${({ theme }) => theme.colours.red[700]};
    font-size: 0.7rem;

    margin-left: 0.5rem;
  }

  cursor: pointer;
`;

export const InputStyled = styled.input`
  display: block;

  width: 100%;
  height: 4.5rem;

  position: relative;

  font-family: ${({ theme }) => theme.font.fontFamily[0]};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.08rem;

  border: 0.1rem solid ${({ theme }) => theme.colours.neutrals[200]};
  border-radius: 0.8rem;

  padding: 0 1rem;

  transition: all 0.3s ease-in-out;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    box-shadow: 0 0 0 3rem white inset !important;
    -webkit-box-shadow: 0 0 0 3rem white inset !important;
  }

  :focus {
    border-color: ${({ theme }) => theme.colours.primary};
    -webkit-box-shadow: inset 0 0.1rem 0.1rem rgba(0, 175, 145, 0.075),
      0 0 0.5rem rgba(0, 175, 145, 0.4);
    -moz-box-shadow: inset 0 0.1rem 0.1rem rgba(0, 175, 145, 0.075),
      0 0 0.5rem rgba(0, 175, 145, 0.4);
    box-shadow: inset 0 0.1rem 0.1rem rgba(0, 175, 145, 0.075), 0 0 0.5rem rgba(0, 175, 145, 0.4);
  }
`;

export const InputStyledTextError = styled.span`
  position: absolute;
  left: 0;
  bottom: -2rem;

  font-family: ${({ theme }) => theme.font.fontFamily[0]};
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.56rem;

  color: ${({ theme }) => theme.colours.red[400]};
`;
