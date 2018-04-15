import React from 'react';
import PropTypes from 'prop-types';
import Default from './Image.styles';

const Image = (props) => {
  const {
    url,
  } = props;

  return (
    <Default src={url} />
  );
};

Image.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Image;
