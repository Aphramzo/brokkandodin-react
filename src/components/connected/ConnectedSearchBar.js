import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as SearchActions from '../../actions/SearchActions';
import { SearchBar } from '../';


const ConnectedSearchBar = (props) => {
  const {
    searchTerm,
    tags,
  } = props;

  const removeTag = tag => props.actions.removeSearchTag(tag);

  const updateSearch = newSearchTerm => props.actions.updateSearchTerm(newSearchTerm);

  return (
    <SearchBar
      onSearch={updateSearch}
      onTagRemove={removeTag}
      searchTerm={searchTerm}
      tags={tags}
    />
  );
};

ConnectedSearchBar.propTypes = {
  actions: PropTypes.objectOf(PropTypes.shape).isRequired,
  searchTerm: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
};

ConnectedSearchBar.defaultProps = {
  searchTerm: '',
  tags: [],
};

const mapStateToProps = (state, ownProps) => (
  {
    searchTerm: state.search.searchTerm,
    tags: state.search.tags,
  }
);

const mapDispatchToProps = dispatch => (
  {
    actions: bindActionCreators(SearchActions, dispatch),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedSearchBar);
