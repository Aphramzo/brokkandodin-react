import PropTypes from 'prop-types';

export default PropTypes.shape({
  date: PropTypes.string,
  description: PropTypes.string,
  largeWidth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  smallHeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  smallWidth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  tags: PropTypes.array,
  urlLarge: PropTypes.string,
  urlOriginal: PropTypes.string,
  urlSmall: PropTypes.string,
  video: PropTypes.bool,
  videoUrl: PropTypes.string,
});
