import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

  componentWillReceiveProps(nextProps) {
    if (this.props.tags !== nextProps) {
      this.setState({
        images: [],
        pageNumber: 1,
      }, this.loadMore);
    }
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
    const photos = await GetLatest(this.state.pageNumber, 25, this.props.tags.join(','));
    this.setImages(photos);
  }

  render() {
    return (
      <BottomScrollListener onBottom={this.loadMore}>
        <RecentPhotosContainer>
          <ImageSet
            images={this.state.images.sort(SortImages)}
            onTagClick={this.props.onTagClick}
          />
        </RecentPhotosContainer>
      </BottomScrollListener>
    );
  }
}

RecentPhotos.propTypes = {
  onTagClick: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

RecentPhotos.defaultProps = {
  tags: [],
};

export default RecentPhotos;
