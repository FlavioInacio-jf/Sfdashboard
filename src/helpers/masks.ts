import { FormEvent } from 'react';

export const currency = (event: FormEvent<HTMLInputElement>) => {
  let { value } = event.currentTarget;

  value = value.replace(/\D/g, '');
  value = value.replace(/(\d{0})(\d)/, 'R$ $1$2');
  value = value.replace(/(\d)(\d{2})$/, '$1,$2');
  value = value.replace(/(?=(\d{3})+(\D))\B/g, '.');
  event.currentTarget.value = value;
};

export const number = (event: FormEvent<HTMLInputElement>) => {
  let { value } = event.currentTarget;
  value = value.replace(/\D/g, '');
  event.currentTarget.value = value;
};
