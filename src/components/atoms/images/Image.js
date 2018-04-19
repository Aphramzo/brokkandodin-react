import React from 'react';
import PropTypes from 'prop-types';
import ImageZoom from 'react-medium-image-zoom';
import Default from './Image.styles';

const Image = (props) => {
  const {
    description,
    fullUrl,
    onClick,
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
          width: '100%',
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
  onClick: PropTypes.func,
  previewUrl: PropTypes.string.isRequired,
};

Image.defaultProps = {
  description: '',
  fullUrl: '',
  onClick: () => {},
};

export default Image;
