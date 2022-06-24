import Link from 'next/link';
import { FC } from 'react';
import { Container } from '../../Container';
import { AllCategoriesButton } from './AllCategoriesButton';
import { content } from './content';
import { Nav, NavBarItem } from './styles';

export const NavBar: FC = () => {
  return (
    <Nav>
      <Container d="flex" justifyContent="start" h="50%" alignItems="center">
        <NavBarItem>
          <AllCategoriesButton />
        </NavBarItem>

        {content.map(({ href, name }) => {
          return (
            <NavBarItem key={name}>
              <Link href={href}>
                <a>{name}</a>
              </Link>
            </NavBarItem>
          );
        })}
      </Container>
    </Nav>
  );
};
