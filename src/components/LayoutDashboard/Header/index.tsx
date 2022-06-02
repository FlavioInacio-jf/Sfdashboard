import { FC } from 'react';
import { BsPlusLg, BsSearch } from 'react-icons/bs';
import { useQuery } from 'react-query';
import { queryKey } from '../../../constants/queryKeys';
import { useDashboard } from '../../../hooks/useDashboard';
import { userService } from '../../../services/userService';
import { UserType } from '../../../types/userType';
import { Button } from '../../Button';
import { RenderIf } from '../../RenderIf';
import { Container, HeaderAvatar, HeaderWrapperActions, Search } from './styles';

export const Header: FC = () => {
  const { handleSearchDashboard, handleOpenNewProductModal } = useDashboard();
  const { data: user } = useQuery<UserType>(queryKey.session, userService.me);

  return (
    <Container>
      <Search>
        <BsSearch />
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          type="text"
          id="search"
          placeholder="Search by product name"
          onChange={handleSearchDashboard}
        />
      </Search>
      <HeaderWrapperActions>
        <Button type="button" size="large" noPadding onClick={handleOpenNewProductModal}>
          <BsPlusLg />
          <span className="sr-only">Add Product</span>
        </Button>
        <HeaderAvatar>
          <RenderIf condition={user?.photo_url?.startsWith('https://') || false}>
            <img src={user?.photo_url} width="30" height="30" />
          </RenderIf>
        </HeaderAvatar>
      </HeaderWrapperActions>
    </Container>
  );
};
