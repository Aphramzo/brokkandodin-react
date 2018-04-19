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
      searchCriteria: '',
    };

    this.loadMore = this.loadMore.bind(this);
    this.onTagClick = this.onTagClick.bind(this);
  }

  componentDidMount() {
    this.loadMore();
  }

  async onTagClick(tag) {
    this.setState({
      images: [],
      pageNumber: 1,
      searchCriteria: tag,
    }, this.loadMore);
  }

  setImages(images) {
    // Let's check and see if there were actually new images
    const newSet = [...this.state.images, ...images];
    if (newSet.length !== this.state.images.length) {
      this.setState({
        images: newSet,
        pageNumber: this.state.pageNumber + 1,
      });
    }
  }

  async loadMore() {
    const photos = await GetLatest(this.state.pageNumber, 25, this.state.searchCriteria);
    this.setImages(photos);
  }

  render() {
    return (
      <BottomScrollListener onBottom={this.loadMore}>
        <RecentPhotosContainer>
          <ImageSet
            images={this.state.images.sort(SortImages)}
            onTagClick={this.onTagClick}
          />
        </RecentPhotosContainer>
      </BottomScrollListener>
    );
  }
}

export default RecentPhotos;
