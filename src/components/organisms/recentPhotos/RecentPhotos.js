import React, { Component } from 'react';
import { ImageSet } from '../../';
import GetLatest from '../../../api/photos/Flickr';

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
      images: images.map(photo => (photo.urlSmall)),
    });
  }

  render() {
    return (
      <ImageSet images={this.state.images} />
    );
  }
}

export default RecentPhotos;
