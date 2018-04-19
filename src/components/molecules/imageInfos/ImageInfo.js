import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  AgeFriendly,
  TimeAgoFriendly,
} from '../../../utilities/AgeCalculator';
import { Tags } from '../../';
import {
  Age,
  DateTaken,
  Description,
} from './ImageInfo.styles';

const ImageInfo = (props) => {
  const {
    dateTaken,
    description,
    onTagClick,
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
      <Tags
        onTagClick={onTagClick}
        tags={tags}
      />
    </Description>
  );
};

ImageInfo.propTypes = {
  dateTaken: PropTypes.string,
  description: PropTypes.string,
  onTagClick: PropTypes.func,
  tags: PropTypes.arrayOf(PropTypes.string),
};

ImageInfo.defaultProps = {
  dateTaken: undefined,
  description: '',
  onTagClick: () => {},
  tags: [],
};

export default ImageInfo;
