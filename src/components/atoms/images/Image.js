import React from 'react';
import PropTypes from 'prop-types';
import ImageZoom from 'react-medium-image-zoom';

const Image = (props) => {
  const {
    description,
    fullUrl,
    previewHeight,
    previewWidth,
    previewUrl,
  } = props;
  return (
    <ImageZoom
      defaultStyles={{
        overlay: {
          'background-color': '#333',
        },
      }}
      image={{
        alt: description,
        src: previewUrl,
        style: {
          height: `${previewHeight}px`,
          width: `${previewWidth}px`,
        },
      }}
      shouldReplaceImage={false}
      zoomImage={{
        src: fullUrl,
      }}
    />
  );
};

Image.propTypes = {
  description: PropTypes.string,
  fullUrl: PropTypes.string,
  previewHeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  previewWidth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  previewUrl: PropTypes.string.isRequired,
};

Image.defaultProps = {
  description: '',
  fullUrl: '',
  previewHeight: 200,
  previewWidth: 300,
};

export default Image;
