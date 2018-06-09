import React from 'react';
import PropTypes from 'prop-types';
import VideoWrapper from './Video.styles';

const Video = (props) => {
  const {
    thumbnailHeight,
    thumbnailWidth,
    thumbnailUrl,
    videoUrl,
  } = props;

  const onVideoClick = (e) => {
    const video = e.target;
    return video.paused ? video.play() : video.pause();
  };

  return (
    <VideoWrapper
      controls
      onClick={onVideoClick}
      poster={thumbnailUrl}
      style={{
          height: `${thumbnailHeight}px`,
          width: `${thumbnailWidth}px`,
      }}
    >
      <source
        src={videoUrl}
        type="video/mp4"
      />
    </VideoWrapper>
  );
};

Video.propTypes = {
  thumbnailHeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  thumbnailWidth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  thumbnailUrl: PropTypes.string,
  videoUrl: PropTypes.string,
};

Video.defaultProps = {
  thumbnailHeight: 200,
  thumbnailWidth: 300,
  thumbnailUrl: '',
  videoUrl: '',
};

export default Video;
