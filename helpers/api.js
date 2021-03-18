/* eslint-disable */
const axios = require('axios');
const regeneratorRuntime = require('regenerator-runtime');
const config = require('../config.js');

axios.defaults.headers.common.authorization = config.API_TOKEN;

// INTERACTION WIDGET HELPER

const sendClickData = async (data) => {
  try {
    const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/interactions';
    const response = await axios.post(url, data);
  } catch (error) {
    console.log(error);
  }
};

// PRODUCTS DETAIL WIDGET HELPERS

const getProductData = async (id) => {
  try {
    const response = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getStyles = async (id) => {
  try {
    const response = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products/${id}/styles`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getRelated = async (id) => {
  try {
    const response = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products/${id}/related`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// RATINGS/REVIEWS WIDGET HELPERS

// get onePage helper function
const getNextPage = async (page, id, sort) => {
  // console.log('from inner recursive get next page func: ', sort)
  const url = `http://localhost:3000/reviews/?sort=${sort}&page=${page}&count=5&product_id=1`;

  const response = await axios.get(url);
  console.log('response from axios GET: ', response);

  return response.data;
};

const getReviews = async (id, sort) => {
  console.log('get reviews has been called');
  const reviews = [];
  let page = 0;

  try {
    do {
      var onePage = await getNextPage(page + 1, id, sort);

      reviews.push(onePage);
      page++;
    } while (onePage.length > 0);

    console.log('reviews: ', reviews.flat());
    return reviews.flat();
  } catch (error) {
    console.log(error);
  }
};

const getReviewsMeta = async (id) => {
  try {
    const response = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/reviews/meta?product_id=${id}`);
    console.log('META RESPONSE: ', response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const markHelpful = (reviewId, cb) => {
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/reviews/${reviewId}/helpful`)
    .then((response) => {
      cb(null, response);
    })
    .catch((err) => {
      cb(err, null);
    });
};

const reportReview = (reviewId, cb) => {
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/reviews/${reviewId}/report`)
    .then((response) => {
      cb(null, response);
    })
    .catch((err) => {
      cb(err, null);
    });
};

const addReview = (reviewFormObj, cb) => {
  console.log(reviewFormObj);
  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/reviews', reviewFormObj)
    .then((response) => {
      cb(null, response);
    })
    .catch((err) => {
      cb(err, null);
    });
};

module.exports = {
  getProductData,
  getStyles,
  getRelated,
  getReviews,
  getReviewsMeta,
  markHelpful,
  reportReview,
  sendClickData,
  addReview
};
