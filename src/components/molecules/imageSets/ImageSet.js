import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { ImageCard } from '../../';
import Container from './ImageSet.styles.js';

const ImageSet = (props) => {
  const {
    images,
  } = props;
  return (
    <Container>
      {images.map(image => (
        <ImageCard
          image={image}
          key={v4()}
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
