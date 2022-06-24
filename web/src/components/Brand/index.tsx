import Link from 'next/link';
import { FC } from 'react';
import { BrandStyled } from './styles';

export const Brand: FC = () => {
  return (
    <Link href="/">
      <BrandStyled>
        <span>PD</span>
        ream
      </BrandStyled>
    </Link>
  );
};
