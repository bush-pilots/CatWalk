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
  }

  componentDidUpdate(prevProps) {
    if (prevProps.style !== this.props.style) {
      this.extractImages();
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

  render() {
    return (
      <div id="image-gallery" style={{ backgroundImage: `url(${this.state.fullSizeImages[this.state.currentImgIndex]})` }}>
        <div id="thumbnail-gallery">
          {this.state.thumbnails.map((thumbnail, index) => {
            if (index !== this.state.currentImgIndex) {
              return (
                <img className="thumbnail-gallery-item" key={index} src={thumbnail} alt="" />
              );
            }
          })}
        </div>
      </div>
    );
  }
}
export default ImageGallery;
