import { FC, InputHTMLAttributes } from 'react';
import { handleKeyUp, MasksType } from '../../../helpers';
import { FormGroup, FormGroupProps, InputStyled, Label } from './styles';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'name' | 'id'>,
    FormGroupProps {
  label: string;
  name: string;
  mask?: MasksType;
}
export const Input: FC<InputProps> = ({ label, name, mask, margin, ...rest }) => {
  return (
    <FormGroup margin={margin}>
      <Label htmlFor={name}>{label}</Label>
      <InputStyled
        name={name}
        id={name}
        {...rest}
        onKeyUp={(event) => handleKeyUp(mask || 'none', event)}
      />
    </FormGroup>
  );
};
