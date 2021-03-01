import React from 'react';
import axios from 'axios';
import config from '/config.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  withRouter,
} from "react-router-dom";

const api = require('/helpers/api.js');

class ApiCheckDisplay extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div>
        <h1>API DISPLAY:</h1>
        <h3>Product Data:</h3>
        <p>{JSON.stringify(this.props.productData)}</p>
        <h3>Styles: </h3>
        <p>{JSON.stringify(this.props.styles)}</p>
        <h3>Related: </h3>
        <p>{JSON.stringify(this.props.related)}</p>
      </div>
    )
  }
}


export default withRouter(ApiCheckDisplay);