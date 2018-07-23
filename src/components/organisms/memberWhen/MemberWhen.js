import React, { Component } from 'react';
import { v4 } from 'uuid';
import { HomePage } from '../../index';
import { MemberWhenTitle } from '../../../utilities/AgeCalculator';
import { MonthsAgo } from '../../../api/photos/Flickr';
import Memory from './Memory';

class MemberWhen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      memories: [],
    };

    this.loadMonth = this.loadMonth.bind(this);
  }

  componentDidMount() {
    this.loadMonth(-1);
    // TODO: obviously make this dynamic
    this.loadMonth(-6);
    this.loadMonth(-12);
    this.loadMonth(-18);
    this.loadMonth(-24);
    this.loadMonth(-30);
    this.loadMonth(-36);
    this.loadMonth(-42);
  }

  async loadMonth(month) {
    const photos = await MonthsAgo(month);
    this.setState({
      memories: [...this.state.memories, {
        month,
        photos,
        title: MemberWhenTitle(month),
      }].sort((a, b) => (a.month > b.month ? -1 : 1)),
    });
  }

  render() {
    return (
      <HomePage showSearch={false}>
        {this.state.memories.map(memory => (
          <Memory
            key={v4()}
            memory={memory}
          />
        ))}
      </HomePage>
    );
  }
}

export default MemberWhen;
