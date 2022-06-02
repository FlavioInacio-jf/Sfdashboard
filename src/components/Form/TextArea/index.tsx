import { ErrorMessage } from '@hookform/error-message';
import { TextareaHTMLAttributes } from 'react';
import { DeepMap, FieldError, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';
import { BsAsterisk } from 'react-icons/bs';
import { Label, TextAreaFormGroup, TextAreaStyle, TextAreaStyleTextError } from './styles';

export interface TextAreaProps<T>
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'name'> {
  label: string;
  name: Path<T>;
  margin: string;
  register?: UseFormRegister<T>;
  errors?: Partial<DeepMap<T, FieldError>>;
  rules?: RegisterOptions;
  disabledRequeridStyle?: boolean;
}

// eslint-disable-next-line react/function-component-definition
export function TextArea<T>({
  label,
  name,
  margin,
  register,
  rules,
  errors,
  disabledRequeridStyle,
  ...props
}: TextAreaProps<T>) {
  return (
    <TextAreaFormGroup margin={margin}>
      <Label htmlFor={name}>
        {label}
        {rules?.required && !disabledRequeridStyle && (
          <span>
            <BsAsterisk />
          </span>
        )}
      </Label>
      <TextAreaStyle id={name} name={name} {...props} {...(register && register(name, rules))} />
      <ErrorMessage
        errors={errors}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        name={name as any}
        render={({ message }) => <TextAreaStyleTextError>{message}</TextAreaStyleTextError>}
      />
    </TextAreaFormGroup>
  );
}
