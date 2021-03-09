/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
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
import expand from './assets/expand.png';

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImgIndex: 0,
      fullSizeImages: [],
      thumbnails: [],
      expandedView: false,
      maxWidth: '600px'
    };
    this.changeImageIndex = this.changeImageIndex.bind(this);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.handleViewChange = this.handleViewChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.style !== this.props.style) {
      this.extractImages();
    }
    if (prevProps.product !== this.props.product) {
      this.setState({ currentImgIndex: 0 });
    }
  }

  handleViewChange() {
    if (this.state.expandedView) this.setState({ maxWidth: '600px', expandedView: false });
    else this.setState({ maxWidth: '1200px', expandedView: true });
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

  render() {
    return (
      <div
        className="carousel-container"
        style={{
          maxWidth: this.state.maxWidth
        }}
      >
        {this.props.isFetching ? <LoadingDiv />
          : (
            <div className="carousel-wrapper">
              {this.state.currentImgIndex > 0 && <button className="left-arrow" id="carousel-left-arrow" onClick={this.prev}>&lt;</button>}
              <div className="carousel-content-wrapper">
                {this.state.thumbnails.length > 1 && <ThumbnailGallery thumbnails={this.state.thumbnails} currentImgIndex={this.state.currentImgIndex} changeImageIndex={this.changeImageIndex} />}
                <button className="expanded-view" onClick={this.handleViewChange}>
                  <img src={expand} alt="" style={{ height: '20px', width: '20px' }} />
                </button>
                <div className="carousel-content" style={{ transform: `translateX(-${this.state.currentImgIndex * 100}%)` }}>
                  {this.state.fullSizeImages.map((imageUrl, i) => (<img src={imageUrl || noImage} key={i} alt="" style={{ objectFit: 'contain' }} />))}
                </div>
              </div>
              {this.state.currentImgIndex < this.state.fullSizeImages.length - 1 && <button className="right-arrow" id="carousel-right-arrow" onClick={this.next}>&gt;</button>}
            </div>
          )}
      </div>
    );
  }
}
export default ImageCarousel;
