import { BsSearch } from 'react-icons/bs';
import { SearchGroup } from './styles';

export const Search = () => {
  return (
    <SearchGroup>
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input type="search" id="search" />
      <BsSearch />
    </SearchGroup>
  );
};
