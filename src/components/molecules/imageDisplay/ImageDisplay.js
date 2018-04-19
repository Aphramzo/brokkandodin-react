import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  Video,
} from '../../';

const ImageDisplay = (props) => {
  const {
    image,
  } = props;

  if (!image.video) {
    return (
      <Image
        description={image.description}
        fullUrl={image.urlLarge}
        previewUrl={image.urlSmall}
      />
    );
  }

  return (
    <Video
      thumbnailUrl={image.urlSmall}
      videoUrl={image.videoUrl}
    />
  );
};

ImageDisplay.propTypes = {
  image: PropTypes.shape.isRequired,
};

export default ImageDisplay;
