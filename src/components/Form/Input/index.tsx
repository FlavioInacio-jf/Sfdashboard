import { FC, InputHTMLAttributes } from 'react';
import { handleKeyUp, MasksType } from '../../../helpers';
import { FormGroup, InputStyled, Label } from './styles';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'name' | 'id'> {
  label: string;
  name: string;
  mask?: MasksType;
}
export const Input: FC<InputProps> = ({ label, name, mask, ...rest }) => {
  return (
    <FormGroup>
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
