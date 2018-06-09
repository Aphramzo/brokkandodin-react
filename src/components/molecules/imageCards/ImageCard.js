import React from 'react';
import PropTypes from 'prop-types';
import ImageShape from '../../../models/image';
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
  image: ImageShape,
  onTagClick: PropTypes.func,
};

ImageCard.defaultProps = {
  image: undefined,
  onTagClick: () => {},
};

export default ImageCard;
