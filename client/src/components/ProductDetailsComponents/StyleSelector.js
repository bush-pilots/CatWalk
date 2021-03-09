/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import check from './assets/check.png';
import noImage from './assets/no-image.png';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div id="style-selector">
        <span id="style-name" className="large">
          {this.props.currentStyle.name}
        </span>
        <br />
        <div id="style-selector-list">
          {this.props.styles.results.map((style) => (
            // eslint-disable-next-line max-len
            <div
              className={this.props.currentStyle === style ? 'style-selector-item selected-style' : 'style-selector-item'}
              key={style.style_id}
              onClick={() => this.props.changeStyle(style)}
              style={{
                backgroundImage: `url(${style.photos[0].thumbnail_url || noImage})`
              }}
            >
              {this.props.currentStyle === style && <img className="selected-check" src={check} alt="" />}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default StyleSelector;
