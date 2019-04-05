import React from 'react';
import { shallow } from 'enzyme';

import Video from './Video';
import VideoWrapper from './Video.styles';

describe('Video Component', () => {
  it('renders the correct source', () => {
    const wrapper = shallow(<Video videoUrl="my-url" />);
    expect(wrapper
      .find(VideoWrapper)
      .find('source')
      .prop('src')).toEqual('my-url');
  });
});
