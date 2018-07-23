import React from 'react';
import PropTypes from 'prop-types';

const MemberWhen = props => (
  <div>
    {props.title}
  </div>
);

MemberWhen.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MemberWhen;
