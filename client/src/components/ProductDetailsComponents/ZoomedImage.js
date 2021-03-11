/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-unused-state */
import React from 'react';

class ZoomedImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xShift: 0,
      yShift: 0,
      hover: false
    };

    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseExit = this.handleMouseExit.bind(this);
  }

  handleMouseMove(e) {
    const xShift = e.clientX / window.innerWidth;
    const yShift = e.clientY / window.innerHeight;
    this.setState({ xShift, yShift });
  }

  handleMouseEnter() {
    this.setState({ hover: true });
  }

  handleMouseExit() {
    this.setState({ hover: false });
  }

  render() {
    return (
      <div className="image-modal">
        <div className="zoomed-image-container" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseExit} onClick={this.props.toggleZoomView} style={{ cursor: 'zoom-out' }}>
          <img className="zoomed-image" src={this.props.image} onMouseMove={this.handleMouseMove} style={{ transform: `translateX(${this.state.xShift * -200 + 100}%) translateY(${this.state.yShift * -200 + 100}%) scale(2)` }} />
        </div>
      </div>
    );
  }
}

export default ZoomedImage;
