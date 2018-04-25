import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as SearchActions from '../../actions/SearchActions';
import { RecentPhotos } from '../';


const ConnectedRecentPhotos = (props) => {
  const {
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
      tags={tags}
    />
  );
};

ConnectedRecentPhotos.propTypes = {
  actions: PropTypes.objectOf(PropTypes.shape).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

ConnectedRecentPhotos.defaultProps = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedRecentPhotos);
