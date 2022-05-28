import { FC, TextareaHTMLAttributes } from 'react';
import { Label, TextAreaFormGroup, TextAreaStyle } from './styles';

export type TextAreaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'name'> & {
  label: string;
  name: string;
  margin: string;
};

export const TextArea: FC<TextAreaProps> = ({ label, name, margin, ...props }) => {
  return (
    <TextAreaFormGroup margin={margin}>
      <Label htmlFor={name}>{label}</Label>
      <TextAreaStyle id={name} name={name} {...props} />
    </TextAreaFormGroup>
  );
};
