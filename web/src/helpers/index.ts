import { FormEvent } from 'react';
import { currency, number } from './masks';

export type MasksType = 'currency' | 'number' | 'none';
export const handleKeyUp = (mask: MasksType, event: FormEvent<HTMLInputElement>) => {
  switch (mask) {
    case 'currency':
      currency(event);
      break;
    case 'number':
      number(event);
      break;
    default:
      break;
  }
};

export const search = (filter: string, value: string) => {
  return filter.toLocaleLowerCase().includes(value.toLocaleLowerCase());
};
