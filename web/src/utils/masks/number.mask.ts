import { FormEvent } from 'react';

export const numberMask = (event: FormEvent<HTMLInputElement>) => {
  let { value } = event.currentTarget;
  const regex = new RegExp('^0+(?!$)', 'g');

  value = value.replace(/\D/g, '');
  value = value.replace(regex, '');
  event.currentTarget.value = value;
};
