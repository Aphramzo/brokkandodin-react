import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import {
  SearchBarContainer,
  SearchButton,
  SearchInput,
  SearchInputContainer,
  SearchTagContainer,
} from './SearchBar.styles';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    // If there is an initial store value - set our state to it to reflect
    // After that it should all be handled from this state anyway
    this.setState({
      searchTerm: this.props.searchTerm,
    });
  }

  handleChange(e) {
    this.setState({
      searchTerm: e.target.value,
    });
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.props.onSearch(this.state.searchTerm);
    }
  }

  render() {
    const {
      onSearch,
      onTagRemove,
      tags,
    } = this.props;

    return (
      <SearchBarContainer>
        <SearchInputContainer>
          <SearchInput
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            placeholder="search"
            type="text"
            value={this.state.searchTerm}
          />
          <SearchButton>
            <FontAwesome
              name="search"
              onClick={() => onSearch(this.state.searchTerm)}
              title="Search"
            />
          </SearchButton>
        </SearchInputContainer>

        {tags.map(tag => (
          <SearchTagContainer>
            <FontAwesome
              name="times-circle"
              onClick={() => onTagRemove(tag)}
            />
            {tag}
          </SearchTagContainer>
            ))}
      </SearchBarContainer>
    );
  }
}

SearchBar.propTypes = {
  onSearch: PropTypes.func,
  onTagRemove: PropTypes.func,
  searchTerm: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
};

SearchBar.defaultProps = {
  onSearch: () => {},
  onTagRemove: () => {},
  searchTerm: '',
  tags: [],
};

export default SearchBar;
