import { FC } from 'react';
import { BsPlusLg, BsSearch } from 'react-icons/bs';
import { useDashboard } from '../../../hooks/useDashboard';
import { Button } from '../../Button';
import { Container, HeaderAvatar, HeaderWrapperActions, Search } from './styles';

export const Header: FC = () => {
  const { handleSearchDashboard, handleOpenNewProductModal } = useDashboard();
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
          <img
            src="https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
            width="30"
            height="30"
          />
        </HeaderAvatar>
      </HeaderWrapperActions>
    </Container>
  );
};
