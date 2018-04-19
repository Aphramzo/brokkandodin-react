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
    onTagClick,
  } = props;
  return (
    <Card imageWidth={image.smallWidth}>
      <ImageDisplay image={image} />
      <ImageInfo
        dateTaken={image.date}
        description={image.description}
        onTagClick={onTagClick}
        tags={image.tags}
      />
    </Card>
  );
};

ImageCard.propTypes = {
  image: PropTypes.shape.isRequired,
  onTagClick: PropTypes.func,
};

ImageCard.defaultProps = {
  onTagClick: () => {},
};

export default ImageCard;
