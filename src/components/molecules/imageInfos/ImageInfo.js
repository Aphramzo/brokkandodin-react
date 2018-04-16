import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  DateTaken,
  Description,
} from './ImageInfo.styles';

const ImageInfo = (props) => {
  const {
    dateTaken,
    description,
    tags,
  } = props;

  const dateDisplay = moment(dateTaken, 'YYYY-MM-D').format('dddd, MMMM Do YYYY');

  return (
    <Description>
      <DateTaken>
        {dateDisplay}
      </DateTaken>
      {description}
    </Description>
  );
};

ImageInfo.propTypes = {
  dateTaken: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
};

ImageInfo.defaultProps = {
  dateTaken: undefined,
  description: '',
  tags: [],
};

export default ImageInfo;
