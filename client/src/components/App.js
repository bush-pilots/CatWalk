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
import ApiCheck from './ApiCheck';
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
    api.getReviews(productId, (err, results) => {
      if (err) {
        console.log('Error getting reviews: ', err);
      } else {
        this.setState({ reviews: results });
      }
    })
  }

  updateData(id) {
    this.setState({isFetching: true});
    const updateStorage = {};
    if (id !== '') {
      api.getProductData(id, (err, results) => {
        // this.setState({ productData: results.data });
        updateStorage.productData = results.data;
        api.getStyles(id, (err, results) => {
          // this.setState({ styles: results.data });
          updateStorage.styles = results.data
          api.getRelated(id, (err, results) => {
            // this.setState({ related: results.data });
            updateStorage.related = results.data;
            api.getReviews(id, (err, results) => {
              if (err) {
                console.log('Error getting reviews: ', err);
              } else {
                // this.setState({ reviews: results });
                updateStorage.reviews = results;
                // set state
                api.getReviewsMeta(id, (err, results) => {
                  // console.log('Reviews: ', updateStorage.reviews)
                  // console.log('Reviews Meta: ', results);
                  updateStorage.reviewsMeta = results.data;
                  updateStorage.isFetching = false;
                  this.setState(updateStorage);
                });
              }
            });
          });
        });
      });

    }
  }

  render() {
    return (
      <>
        <div className="cssCheck">
          TSVT FTW! 🌴 🏰 🧵 🌩️
        </div>
        <div />
        <ProductDetails
          id={this.props.match.params.id}
          productData={this.state.productData}
          styles={this.state.styles}
        />
        <ApiCheck
          updateData={this.updateData}
        // productData={this.state.productData}
        // styles={this.state.styles}
        // related={this.state.related}
        />
        <QA product={this.state.productData}
          id={this.props.match.params.id} />
        <div className="RR">
          <RatingsReviewsParent isFetching={this.state.isFetching} reviewsMeta={this.state.reviewsMeta} reviews={this.state.reviews} updateProductReviews={this.updateProductReviews}/>
        </div>
      </>
    );
  }
}

export default withRouter(App);
