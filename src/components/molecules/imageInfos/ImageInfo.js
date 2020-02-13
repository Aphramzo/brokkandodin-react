import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  AgeFriendly,
  TimeAgoFriendly,
} from '../../../utilities/AgeCalculator';
import { Tags } from '../../';
import Download from '../../../images/download';
import {
  Age,
  DateTaken,
  Description,
  DownloadLink,
  SubLine,
} from './ImageInfo.styles';

const ImageInfo = (props) => {
  const {
    dateTaken,
    description,
    onTagClick,
    originalLink,
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
      <SubLine>
        <Age>
          {timeAgo}
        </Age>

        {originalLink &&
        <DownloadLink href={originalLink} target="_blank" title="Download Original">
          <Download />
        </DownloadLink>
      }
      </SubLine>

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
  originalLink: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
};

ImageInfo.defaultProps = {
  dateTaken: undefined,
  description: '',
  onTagClick: () => {},
  originalLink: null,
  tags: [],
};

export default ImageInfo;
