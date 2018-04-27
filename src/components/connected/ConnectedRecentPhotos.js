import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as SearchActions from '../../actions/SearchActions';
import { RecentPhotos } from '../';


const ConnectedRecentPhotos = (props) => {
  const {
    searchTerm,
    tags,
  } = props;

  const onTagClick = async (tag) => {
    if (tags.indexOf(tag) > -1) {
      return props.actions.removeSearchTag(tag);
    }
    return props.actions.addSearchTag(tag);
  };

  return (
    <RecentPhotos
      onTagClick={onTagClick}
      searchTerm={searchTerm}
      tags={tags}
    />
  );
};

ConnectedRecentPhotos.propTypes = {
  actions: PropTypes.objectOf(PropTypes.shape).isRequired,
  searchTerm: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
};

ConnectedRecentPhotos.defaultProps = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedRecentPhotos);
