/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorMessage } from '@hookform/error-message';
import { InputHTMLAttributes } from 'react';
import { DeepMap, FieldError, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';
import { BsAsterisk } from 'react-icons/bs';
import { MasksType } from '../../../types';
import { validadeMaskUtil } from '../../../utils';
import { FormGroup, FormGroupProps, InputStyled, InputStyledTextError, Label } from './styles';

export interface InputProps<T>
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'name' | 'id'>,
    FormGroupProps {
  label: string;
  name: Path<T>;
  mask?: MasksType;
  register?: UseFormRegister<any>;
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
  disabledRequeridStyle,
  ...rest
}: InputProps<T>) {
  return (
    <FormGroup margin={margin}>
      <Label htmlFor={name}>
        {label}
        {rules?.required && !disabledRequeridStyle && (
          <span>
            <BsAsterisk />
          </span>
        )}
      </Label>
      <InputStyled
        name={name}
        id={name}
        {...rest}
        onKeyUp={(event) => validadeMaskUtil(mask || 'none', event)}
        {...(register && register(name, rules))}
      />
      <ErrorMessage
        errors={errors}
        name={name as any}
        render={({ message }) => <InputStyledTextError>{message}</InputStyledTextError>}
      />
    </FormGroup>
  );
}
