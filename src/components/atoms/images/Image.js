import React from 'react';
import PropTypes from 'prop-types';
import Default from './Image.styles';

const Image = (props) => {
  const {
    description,
    url,
  } = props;
  return (
    <Default
      alt={description}
      src={url}
    />
  );
};

Image.propTypes = {
  description: PropTypes.string,
  url: PropTypes.string.isRequired,
};

Image.defaultProps = {
  description: '',
};

export default Image;
