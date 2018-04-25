import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as SearchActions from '../../actions/SearchActions';
import { SearchBar } from '../';


const ConnectedSearchBar = (props) => {
  const {
    tags,
  } = props;

  const removeTag = tag => props.actions.removeSearchTag(tag);

  return (
    <SearchBar
      onTagRemove={removeTag}
      tags={tags}
    />
  );
};

ConnectedSearchBar.propTypes = {
  actions: PropTypes.objectOf(PropTypes.shape).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

ConnectedSearchBar.defaultProps = {
  tags: [],
};

const mapStateToProps = (state, ownProps) => (
  {
    tags: state.search.tags,
  }
);

const mapDispatchToProps = dispatch => (
  {
    actions: bindActionCreators(SearchActions, dispatch),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedSearchBar);
