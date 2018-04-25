import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import {
  SearchBarContainer,
  SearchInput,
  SearchTagContainer,
} from './SearchBar.styles';

const SearchBar = props => (
  <SearchBarContainer>
    <SearchInput
      placeholder="search"
      value={props.searchValue}
      type="text"
    />
    {props.tags.map(tag => (
      <SearchTagContainer>
        <FontAwesome
          name="times-circle"
          onClick={() => props.onTagRemove(tag)}
        />
        {tag}
      </SearchTagContainer>
    ))}
  </SearchBarContainer>

);

SearchBar.propTypes = {
  onTagRemove: PropTypes.func,
  searchValue: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
};

SearchBar.defaultProps = {
  onTagRemove: () => {},
  searchValue: '',
  tags: [],
};

export default SearchBar;
