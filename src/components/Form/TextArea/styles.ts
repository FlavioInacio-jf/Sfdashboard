import styled from 'styled-components';

interface TextAreaFormGroupProps {
  margin?: string;
}
export const TextAreaFormGroup = styled.div<TextAreaFormGroupProps>`
  width: 100%;

  position: relative;

  margin: ${({ margin }) => margin || '0'};
`;

export const Label = styled.label`
  display: inline-block;

  font-family: ${({ theme }) => theme.font.fontFamily[0]};
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.82rem;
  color: ${({ theme }) => theme.colours.neutrals[900]};

  margin-bottom: 0.5rem;

  cursor: pointer;
`;

export const TextAreaStyle = styled.textarea`
  width: 100%;
  height: 11rem;

  resize: none;

  border: 0.1rem solid ${({ theme }) => theme.colours.neutrals[200]};
  border-radius: 0.8rem;

  font-family: ${({ theme }) => theme.font.fontFamily[0]};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.08rem;

  padding: 2rem 1.3rem;

  transition: all 0.3s ease-in-out;

  :focus {
    border-color: ${({ theme }) => theme.colours.primary};
    -webkit-box-shadow: inset 0 0.1rem 0.1rem rgba(0, 175, 145, 0.075),
      0 0 0.5rem rgba(0, 175, 145, 0.4);
    -moz-box-shadow: inset 0 0.1rem 0.1rem rgba(0, 175, 145, 0.075),
      0 0 0.5rem rgba(0, 175, 145, 0.4);
    box-shadow: inset 0 0.1rem 0.1rem rgba(0, 175, 145, 0.075), 0 0 0.5rem rgba(0, 175, 145, 0.4);
  }
`;
