import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  ImageInfo,
} from '../../';
import Card from './ImageCard.styles.js';

const ImageCard = (props) => {
  const {
    image,
  } = props;

  return (
    <Card>
      <Image
        description={image.description}
        url={image.urlSmall}
      />
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
