/* eslint-disable prefer-destructuring */
/* eslint-disable import/extensions */
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
  withRouter
} from 'react-router-dom';
import ProductDetails from './ProductDetailsComponents/ProductDetails';
import QA from './QA/QA.js';
import RatingsReviewsParent from './RR/RatingsReviewsParent';

const api = require('../../../helpers/api');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: '',
      productData: {},
      styles: { results: [] },
      related: [],
      reviews: [],
      reviewsMeta: {},
      isFetching: true
    };
    this.updateData = this.updateData.bind(this);
    this.updateProductReviews = this.updateProductReviews.bind(this);
  }

  componentDidMount() {
    this.updateData(this.props.match.params.id);
  }

  updateProductReviews(productId) {
    api.getReviews(productId)
      .then((res) => {
        this.setState({ reviews: res });
      })
      .catch((err) => {
        console.log('could not update reviews in app: ', err);
      });
  }

  updateData(id) {
    this.setState({ isFetching: true });
    const updateStorage = {};
    this.state.isFetching = true;

    Promise.all([
      (api.getProductData(id)),
      (api.getStyles(id)),
      (api.getRelated(id)),
      (api.getReviews(id)),
      (api.getReviewsMeta(id))])
      .then((data) => {
        updateStorage.productData = data[0];
        updateStorage.styles = data[1];
        updateStorage.related = data[2];
        updateStorage.reviews = data[3];
        updateStorage.reviewsMeta = data[4];
        updateStorage.isFetching = false;
        this.setState(updateStorage);
        this.setState({ isFetching: false });
      })
      .catch((err) => console.log(`Error in promise: ${err}`));
  }

  render() {
    return (
      <>
        <ProductDetails
          id={this.props.match.params.id}
          productData={this.state.productData}
          styles={this.state.styles}
          isFetching={this.state.isFetching}
          reviews={this.state.reviews}
          related={this.state.related}
          updateData={this.updateData}
        />
        <QA
          product={this.state.productData}
          id={this.props.match.params.id}
        />
        <RatingsReviewsParent
          isFetching={this.state.isFetching}
          reviewsMeta={this.state.reviewsMeta}
          reviews={this.state.reviews}
          updateProductReviews={this.updateProductReviews}
          productData={this.state.productData}
        />
      </>
    );
  }
}

export default withRouter(App);
