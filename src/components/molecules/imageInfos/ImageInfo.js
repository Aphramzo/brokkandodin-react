import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  AgeFriendly,
  TimeAgoFriendly,
} from '../../../utilities/AgeCalculator';
import {
  Age,
  DateTaken,
  Description,
} from './ImageInfo.styles';

const ImageInfo = (props) => {
  const {
    dateTaken,
    description,
    tags,
  } = props;

  const dateObject = moment(dateTaken, 'YYYY-MM-D');
  const dateDisplay = dateObject.format('dddd, MMMM Do YYYY');
  const ageDisplay = AgeFriendly(dateObject);
  const timeAgo = TimeAgoFriendly(dateObject);

  return (
    <Description>
      <DateTaken>
        {dateDisplay} - ({ageDisplay})
      </DateTaken>
      <Age>
        {timeAgo}
      </Age>
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
