import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Image from '../../atoms';

const ImageSet = (props) => {
  const {
    images,
  } = props;
  return (
    <div>
      {images.map(image => (
        <Image
          key={v4()}
          url={image}
        />
    ))}
    </div>
  );
};

ImageSet.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

ImageSet.defaultProps = {
  images: [],
};

export default ImageSet;
