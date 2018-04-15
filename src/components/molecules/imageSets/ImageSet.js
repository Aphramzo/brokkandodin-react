import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { Image } from '../../';
import Container from './ImageSet.styles.js';

const ImageSet = (props) => {
  const {
    images,
  } = props;
  return (
    <Container>
      {images.map(image => (
        <Image
          key={v4()}
          url={image}
        />
        ))}
    </Container>
  );
};

ImageSet.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

ImageSet.defaultProps = {
  images: [],
};

export default ImageSet;
