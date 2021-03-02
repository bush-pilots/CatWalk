/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <span id="style-name">
          Current Style:
          {this.props.currentStyle.name}
        </span>
        <br />
        <ul>
          {this.props.styles.results.map((style) => (
            // eslint-disable-next-line max-len
            <btn key={style.style_id} onClick={() => this.props.changeStyle(style)}>{style.name}</btn>
          ))}
        </ul>
      </div>
    );
  }
}

export default StyleSelector;
