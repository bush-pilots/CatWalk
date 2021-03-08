/* eslint-disable react/no-did-update-set-state */
/* eslint-disable max-len */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import carouselCSS from './carouselCSS.css';
import noImage from './assets/no-image.png';
import LoadingDiv from './LoadingDiv';
import ThumbnailGallery from './ThumbnailGallery';

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImgIndex: 0,
      fullSizeImages: [],
      thumbnails: []
    };
    this.changeImageIndex = this.changeImageIndex.bind(this);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
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
    const fullSizeImageUrls = [];
    const thumbnailImageUrls = [];
    this.props.style.photos.forEach((image) => {
      fullSizeImageUrls.push(image.url);
      thumbnailImageUrls.push(image.thumbnail_url);
    });

    this.setState({
      fullSizeImages: fullSizeImageUrls,
      thumbnails: thumbnailImageUrls
    });
  }

  next() {
    if (this.state.currentImgIndex < this.state.fullSizeImages.length - 1) {
      this.changeImageIndex(this.state.currentImgIndex + 1);
    }
  }

  prev() {
    if (this.state.currentImgIndex > 0) {
      this.changeImageIndex(this.state.currentImgIndex - 1);
    }
  }

  changeImageIndex(i) {
    this.setState({ currentImgIndex: i });
  }

  render() {
    return (
      <div
        className="carousel-container"
        style={{
          maxWidth: 600
        }}
      >
        {this.props.isFetching ? <LoadingDiv /> :
        (<div className="carousel-wrapper">
          {this.state.currentImgIndex > 0 && <button className="left-arrow" onClick={this.prev}>&lt;</button>}
            <div className="carousel-content-wrapper">
              {this.state.thumbnails.length > 1 && <ThumbnailGallery thumbnails={this.state.thumbnails} currentImgIndex={this.state.currentImgIndex} changeImageIndex={this.changeImageIndex} />}
            <div className="carousel-content" style={{ transform: `translateX(-${this.state.currentImgIndex * 100}%)` }}>
              {this.state.fullSizeImages.map((imageUrl, i) => (<img src={imageUrl || noImage} key={i} alt="" style={{ objectFit: 'contain' }} />))}
            </div>
          </div>
          {this.state.currentImgIndex < this.state.fullSizeImages.length - 1 && <button className="right-arrow" onClick={this.next}>&gt;</button>}
        </div>
        )}
      </div>
    );
  }
}
export default ImageCarousel;
