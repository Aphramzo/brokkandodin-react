import React, { Component } from 'react';
import { ImageSet } from '../../';
import GetLatest from '../../../api/photos/Flickr';
import RecentPhotosContainer from './RecentPhotos.styles';

class RecentPhotos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
    };
  }

  async componentDidMount() {
    const photos = await GetLatest(0);
    this.setImages(photos);
  }

  setImages(images) {
    this.setState({
      images,
    });
  }

  render() {
    return (
      <RecentPhotosContainer>
        <ImageSet images={this.state.images} />
      </RecentPhotosContainer>
    );
  }
}

export default RecentPhotos;
