import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { ImageCard } from '../../index';
import {
  MemoryTitle,
  MemoryWrapper,
} from './MemberWhen.styles';

const Memory = (props) => {
  if (!props.memory.photos || props.memory.photos.length === 0) {
    return null;
  }

  return (
    <MemoryWrapper>
      <MemoryTitle>
        {props.memory.title}
      </MemoryTitle>
      {props.memory.photos.map(photo => (
        <ImageCard
          image={photo}
          key={v4()}
        />
        ))}
    </MemoryWrapper>
  );
};


Memory.propTypes = {
  memory: PropTypes.shape().isRequired,
};

export default Memory;
