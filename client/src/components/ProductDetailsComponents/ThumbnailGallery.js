/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import noImage from './assets/no-image.png';
import upArrow from './assets/upArrow.png';
import downArrow from './assets/downArrow.png';

class ThumbnailGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollIndex: 0
    };
    this.scrollDown = this.scrollDown.bind(this);
    this.scrollUp = this.scrollUp.bind(this);
  }

  scrollUp() {
    this.setState({ scrollIndex: this.state.scrollIndex - 1 });
  }

  scrollDown() {
    this.setState({ scrollIndex: this.state.scrollIndex + 1 });
  }

  render() {
    return (
      <div id="thumbnail-gallery-container">
        {this.state.scrollIndex > 0 && <button className="top-arrow" onClick={this.scrollUp} style={{ backgroundImage: `url(${upArrow})` }} />}
        <div id="thumbnail-gallery-content-container">
          <div id="thumbnail-gallery" style={{ transform: `translateY(${130 * -this.state.scrollIndex}px)` }}>
            {this.props.thumbnails.map((thumbnail, index) => (
              <img className={index === this.props.currentImgIndex ? 'thumbnail-gallery-item selected-thumbnail' : 'thumbnail-gallery-item'} src={thumbnail || noImage} alt="" onClick={() => this.props.changeImageIndex(index)} name={index} key={index} />
            ))}
          </div>
        </div>
        {this.state.scrollIndex < (this.props.thumbnails.length - 6) / 2 && <button className="bottom-arrow" onClick={this.scrollDown} style={{ backgroundImage: `url(${downArrow})` }} />}
      </div>
    );
  }
}

export default ThumbnailGallery;
