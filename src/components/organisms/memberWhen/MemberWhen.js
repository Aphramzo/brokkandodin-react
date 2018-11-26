import React, { Component } from 'react';
import { v4 } from 'uuid';
import moment from 'moment';
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
    const monthsOld = moment(process.env.REACT_APP_BIRTHDATE).diff(moment(), 'months', false);
    let month = -6;
    while (month >= monthsOld) {
      this.loadMonth(month);
      month -=6;
    }
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
