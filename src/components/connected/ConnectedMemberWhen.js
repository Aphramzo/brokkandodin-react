import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as SearchActions from '../../actions/SearchActions';
import {
  HomePage,
  MemberWhen,
} from '../index';


class ConnectedMemberWhen extends Component {
  onComponentDidMount() {
    this.props.actions.lookUpMemories();
  }

  render() {
    return (
      <HomePage showSearch={false}>
        <MemberWhen title="That 1 year ago something might happen" />
      </HomePage>
    );
  }
}

ConnectedMemberWhen.propTypes = {
  actions: PropTypes.objectOf(PropTypes.shape).isRequired,
};

// ConnectedMemberWhen.defaultProps = {
//   searchTerm: '',
//   tags: [],
// };

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

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedMemberWhen);
