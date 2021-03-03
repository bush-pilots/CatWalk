/* eslint-disable react/no-did-update-set-state */
/* eslint-disable max-len */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImgIndex: 0,
      fullSizeImages: [],
      thumbnails: []
    };
    this.changeImageIndex = this.changeImageIndex.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.style !== this.props.style) {
      this.extractImages();
    }
    if (prevProps.product !== this.props.product) {
      this.setState({ currentImgIndex: 0 });
    }
  }

  extractImages() {
    const fullSizeArray = [];
    const thumbnailArray = [];
    this.props.style.photos.forEach((image) => {
      fullSizeArray.push(image.url);
      thumbnailArray.push(image.thumbnail_url);
    });
    this.setState({
      fullSizeImages: fullSizeArray,
      thumbnails: thumbnailArray
    });
  }

  changeImageIndex(e) {
    this.setState({ currentImgIndex: e.target.name });
  }

  render() {
    return (
      <div id="image-gallery" style={{ backgroundImage: `url(${this.state.fullSizeImages[this.state.currentImgIndex]})` }}>
        <div id="thumbnail-gallery">
          {this.state.thumbnails.map((thumbnail, index) => (
            <img className="thumbnail-gallery-item" src={thumbnail} alt="" onClick={this.changeImageIndex} name={index} key={index} />
          ))}
        </div>
      </div>
    );
  }
}
export default ImageGallery;
