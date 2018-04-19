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
        previewHeight={image.smallHeight}
        previewWidth={image.smallWidth}
        previewUrl={image.urlSmall}
      />
    );
  }

  return (
    <Video
      thumbnailHeight={image.smallHeight}
      thumbnailWidth={image.smallWidth}
      thumbnailUrl={image.urlSmall}
      videoUrl={image.videoUrl}
    />
  );
};

ImageDisplay.propTypes = {
  image: PropTypes.shape.isRequired,
};

export default ImageDisplay;
