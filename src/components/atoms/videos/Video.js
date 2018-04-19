import React from 'react';
import PropTypes from 'prop-types';
import VideoWrapper from './Video.styles';

const Video = (props) => {
  const {
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
    >
      <source
        src={videoUrl}
        type="video/mp4"
      />
    </VideoWrapper>
  );
};

Video.propTypes = {
  thumbnailUrl: PropTypes.string,
  videoUrl: PropTypes.string,
};

Video.defaultProps = {
  thumbnailUrl: '',
  videoUrl: '',
};

export default Video;
