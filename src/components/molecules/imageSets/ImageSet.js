import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import StackGrid from 'react-stack-grid';
import { ImageCard } from '../../';


const ImageSet = (props) => {
  const {
    images,
    onTagClick,
  } = props;
  return (
    <StackGrid
      columnWidth={320}
      gutterHeight={15}
      gutterWidth={20}
    >
      {images.map(image => (
        <ImageCard
          image={image}
          key={v4()}
          onTagClick={onTagClick}
        />
        ))}
    </StackGrid>
  );
};

ImageSet.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  onTagClick: PropTypes.func,
};

ImageSet.defaultProps = {
  images: [],
  onTagClick: () => {},
};

export default ImageSet;
