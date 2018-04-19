import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  ImageInfo,
} from '../../';
import Card from './ImageCard.styles.js';

class ImageCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewLarge: false,
    };

    this.onImageClick = this.onImageClick.bind(this);
  }

  onImageClick() {
    this.setState({
      viewLarge: !this.state.viewLarge,
    });
  }

  render() {
    const {
      image,
    } = this.props;
    return (
      <Card>
        <Image
          description={image.description}
          fullUrl={image.urlLarge}
          onClick={this.onImageClick}
          previewUrl={image.urlSmall}
        />
        <ImageInfo
          dateTaken={image.date}
          description={image.description}
          tags={image.tags}
        />
      </Card>
    );
  }
}

ImageCard.propTypes = {
  image: PropTypes.shape.isRequired,
};

export default ImageCard;
