import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import StackGrid from 'react-stack-grid';
import { ImageCard } from '../../';


const ImageSet = (props) => {
  const {
    images,
  } = props;
  return (
    <StackGrid
      columnWidth={320}
      gutterWidth={20}
    >
      {images.map(image => (
        <ImageCard
          image={image}
          key={v4()}
        />
        ))}
    </StackGrid>
  );
};

ImageSet.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

ImageSet.defaultProps = {
  images: [],
};

export default ImageSet;
