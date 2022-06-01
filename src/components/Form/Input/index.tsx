import { ErrorMessage } from '@hookform/error-message';
import { InputHTMLAttributes } from 'react';
import { DeepMap, FieldError, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';
import { handleKeyUp, MasksType } from '../../../helpers';
import { FormGroup, FormGroupProps, InputStyled, InputStyledTextError, Label } from './styles';

export interface InputProps<T>
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'name' | 'id'>,
    FormGroupProps {
  label: string;
  name: Path<T>;
  mask?: MasksType;
  register?: UseFormRegister<T>;
  errors?: Partial<DeepMap<T, FieldError>>;
  rules?: RegisterOptions;
  disabledRequeridStyle?: boolean;
}
// eslint-disable-next-line react/function-component-definition
export function Input<T>({
  label,
  name,
  mask,
  margin,
  register,
  rules,
  errors,
  ...rest
}: InputProps<T>) {
  //const errorMessage = get(errors, name);
  //const hasError = !!(errors && errorMessage);
  return (
    <FormGroup margin={margin}>
      <Label htmlFor={name}>{label}</Label>
      <InputStyled
        name={name}
        id={name}
        {...rest}
        onKeyUp={(event) => handleKeyUp(mask || 'none', event)}
        {...(register && register(name, rules))}
      />
      <ErrorMessage
        errors={errors}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        name={name as any}
        render={({ message }) => <InputStyledTextError>{message}</InputStyledTextError>}
      />
    </FormGroup>
  );
}
