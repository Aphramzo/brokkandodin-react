import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import {
  Tag,
  TagContainer,
} from './Tags.styles';

const Tags = (props) => {
  const {
    onTagClick,
    tags,
  } = props;

  return (
    <TagContainer>
      {tags.map(tag => (
        <Tag
          key={v4()}
          onClick={() => onTagClick(tag)}
        >
          {`#${tag}`}
        </Tag>
    ))}
    </TagContainer>
  );
};

Tags.propTypes = {
  onTagClick: PropTypes.func,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Tags.defaultProps = {
  onTagClick: () => {},
};

export default Tags;
