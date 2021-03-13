/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
import React from 'react';

const api = require('../../../helpers/api');

const withListener = (WrappedComponent, moduleName) => class ClickLogger extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    const clickData = {
      element: '',
      time: Date().toLocaleString(),
      widget: moduleName
    };
    // console.log('*********************************');
    // console.log('Module: ', clickData.widget);
    // console.log('E.target:', clickData.element);
    // console.log('Timestamp: ', clickData.time);
    // console.log('*********************************');
    if (e.target.id) clickData.element = `Id: ${e.target.id}`;
    else if (e.target.className && typeof e.target.className === 'string') clickData.element = `className: ${e.target.className}`;
    else if (e.target.parentNode.id) clickData.element = `Id of Parent: ${e.target.parentNode.id}`;
    else if (e.target.parentNode.className) clickData.element = `Class of Parent: ${e.target.parentNode.className}`;
    else clickData.element = 'Element identifier not found';

    // post Data to Interactions API
    api.sendClickData(clickData);
  }

  render() {
    return (
      <div>
        <WrappedComponent {...this.props} onClick={this.onClick} />
      </div>
    );
  }
};

export default withListener;
