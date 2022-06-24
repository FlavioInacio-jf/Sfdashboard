import NextLink from 'next/link';
import { FC } from 'react';
import { FaAngleDown, FaUser } from 'react-icons/fa';
import { LogoutMutation } from '../../../../../mutations/logoutMutation';
import { UserType } from '../../../../../types/userType';
import { Avatar, Container } from './styles';

interface MyAccountButton {
  user: Pick<UserType, 'name' | 'photo'> | undefined;
}
export const MyAccountButton: FC<MyAccountButton> = ({ user }) => {
  const { mutate: logoutMutate } = LogoutMutation();

  const handleLogout = () => {
    logoutMutate();
  };
  return (
    <Container>
      <Avatar>
        {user?.photo ? <img src={user?.photo} alt={`Avatar ${user.name}`} /> : <FaUser />}
      </Avatar>

      <div>
        Hello, {user?.name} <br />
        <NextLink href="/my-account">
          <a>
            my account <FaAngleDown />
          </a>
        </NextLink>
      </div>
    </Container>
  );
};
