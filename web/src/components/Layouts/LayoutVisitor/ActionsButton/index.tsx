import Link from 'next/link';
import { FC } from 'react';
import { BsCart3, BsHeart } from 'react-icons/bs';
import { ActionsContainer } from './styles';

export const ActionsButton: FC = () => {
  return (
    <ActionsContainer>
      <Link href="/">
        <a>
          <span className="sr-only">Favorites</span>
          <BsHeart />
        </a>
      </Link>

      <Link href="/">
        <a>
          <span className="sr-only">My cart</span>
          <BsCart3 />
        </a>
      </Link>
    </ActionsContainer>
  );
};
