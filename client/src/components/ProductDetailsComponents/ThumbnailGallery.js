import React from 'react';
import noImage from './assets/no-image.png';
import upArrow from './assets/upArrow.png';
import downArrow from './assets/downArrow.png';

class ThumbnailGallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollIndex: 0
    }
    this.scrollDown = this.scrollDown.bind(this);
    this.scrollUp = this.scrollUp.bind(this);
  }

  scrollUp() {
    this.setState({scrollIndex: this.state.scrollIndex - 1});
    console.log(this.state.scrollIndex);
  }

  scrollDown() {
    this.setState({scrollIndex: this.state.scrollIndex + 1})
    console.log(this.state.scrollIndex);
  }


  render() {
    return (
      <div id="thumbnail-gallery-container">
        {this.state.scrollIndex > 0 && <button className="top-arrow" onClick={this.scrollUp} style={{backgroundImage: `url(${upArrow})`}}></button>}
        <div id="thumbnail-gallery-content-container">
        <div id="thumbnail-gallery" style={{transform: `translateY(${130 * -this.state.scrollIndex}px)`}}>
          {this.props.thumbnails.map((thumbnail, index) => (
            <img className={index === this.props.currentImgIndex ? 'thumbnail-gallery-item selected-thumbnail' : 'thumbnail-gallery-item'} src={thumbnail || noImage} alt="" onClick={() => this.props.changeImageIndex(index)} name={index} key={index} />
          ))}
        </div>
        </div>
        {this.state.scrollIndex < (this.props.thumbnails.length - 6) / 2 && <button className="bottom-arrow" onClick={this.scrollDown} style={{backgroundImage: `url(${downArrow})`}}></button>}
      </div>
    )
  }
}

export default ThumbnailGallery;