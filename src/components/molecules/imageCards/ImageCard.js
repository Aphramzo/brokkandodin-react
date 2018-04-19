import React from 'react';
import PropTypes from 'prop-types';
import {
  ImageDisplay,
  ImageInfo,
} from '../../';
import Card from './ImageCard.styles.js';

const ImageCard = (props) => {
  const {
    image,
  } = props;
  return (
    <Card>
      <ImageDisplay image={image} />
      <ImageInfo
        dateTaken={image.date}
        description={image.description}
        tags={image.tags}
      />
    </Card>
  );
};

ImageCard.propTypes = {
  image: PropTypes.shape.isRequired,
};

export default ImageCard;
