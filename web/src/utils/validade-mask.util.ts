import { FormEvent } from 'react';
import { currencyMask, numberMask } from '.';
import { MasksType } from '../types';

export const validadeMaskUtil = (mask: MasksType, event: FormEvent<HTMLInputElement>) => {
  switch (mask) {
    case 'currency':
      currencyMask(event);
      break;
    case 'number':
      numberMask(event);
      break;
    default:
      break;
  }
};
