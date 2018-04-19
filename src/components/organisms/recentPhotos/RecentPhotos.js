import React, { Component } from 'react';
import BottomScrollListener from 'react-bottom-scroll-listener';
import { ImageSet } from '../../';
import GetLatest from '../../../api/photos/Flickr';
import SortImages from '../../../utilities/SortImages';
import RecentPhotosContainer from './RecentPhotos.styles';

class RecentPhotos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      pageNumber: 1,
    };

    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    this.loadMore();
  }

  setImages(images) {
    this.setState({
      images: [...this.state.images, ...images],
      pageNumber: this.state.pageNumber + 1,
    });
  }

  async loadMore() {
    const photos = await GetLatest(this.state.pageNumber);
    this.setImages(photos);
  }

  render() {
    return (
      <BottomScrollListener onBottom={this.loadMore}>
        <RecentPhotosContainer>
          <ImageSet images={this.state.images.sort(SortImages)} />
        </RecentPhotosContainer>
      </BottomScrollListener>
    );
  }
}

export default RecentPhotos;
