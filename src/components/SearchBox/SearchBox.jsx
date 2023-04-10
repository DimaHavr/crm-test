import { useState } from 'react';
import { Wrapper, Input, Button, SearchIcon } from './SearchBox.styled';

export const SearchBox = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(query);
    onReset(event);
  };

  const onChangeInput = event => {
    setQuery(event.target.value);
  };

  const onReset = event => {
    setQuery('');
    event.target.reset();
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Search"
        value={query}
        onChange={onChangeInput}
        id="search-input"
      />
      <Button type="submit">
        <SearchIcon />
      </Button>
    </Wrapper>
  );
};
export default SearchBox;
