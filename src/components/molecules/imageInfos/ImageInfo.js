import React from 'react';
import PropTypes from 'prop-types';
import Description from './ImageInfo.styles';

const ImageInfo = (props) => {
  const {
    dateTaken,
    description,
    tags,
  } = props;

  return (
    <Description>
      {description}
    </Description>
  );
};

ImageInfo.propTypes = {
  dateTaken: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
};

ImageInfo.defaultProps = {
  dateTaken: undefined,
  description: '',
  tags: [],
};

export default ImageInfo;
