/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React from 'react';
import axios from 'axios';
import {
  Link,
  HashRouter as Router,
  Route,
  withRouter,
} from 'react-router-dom';
import ApiCheck from './ApiCheck';

const api = require('/helpers/api');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: '',
      productData: {},
      styles: {},
      related: [],
      reviews: {},
      reviewsMeta: {},
    };
    this.updateData.bind(this);
  }

  componentDidMount() {
    this.updateData(this.props.match.params.id);
  }

  updateData(id) {
    if (id !== '') {
      api.getProductData(id, (err, results) => {
        this.setState({ productData: results.data });
      });
      api.getStyles(id, (err, results) => {
        this.setState({ styles: results.data });
      });
      api.getRelated(id, (err, results) => {
        this.setState({ related: results.data });
      });
      // api.getReviews(id, (err, results) => {
      //   this.setState({ reviews: results.data });
      // });
      // api.getReviewsMeta(id, (err, results) => {
      //   this.setState({ reviewsMeta: results.data });
      // });
    }
  }

  //
  render() {
    return (
      <div>
        TSVT FTW! 🌴 🏰 🧵 🌩️
        <div />
        <Router>
          <Route path="/:id" component={ApiCheck} />
          <Route exact path="/" component={ApiCheck} />
        </Router>
      </div>
    );
  }
}

export default withRouter(App);
