const axios = require('axios');
const config = require('../config.js');

axios.defaults.headers.common.authorization = config.API_TOKEN;

// broken down by widget to minimize toe-on-toe action

// PRODUCTS DETAIL WIDGET HELPERS

const getProductData = async (id) => {
  try {
    const response = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products/${id}`);
    return response;
  }
  catch (error) {
    console.log(error);
  }
};



const getStyles = async (id) => {
  try {
    const response = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products/${id}/styles`);
    return response;
  }
  catch (error) {
    console.log(error);
  }
};

const getRelated = async (id) => {
  try {
    const response = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products/${id}/related`)
    return response;
  }
  catch (error) {
    console.log(error);
  }
};

// RATINGS/REVIEWS WIDGET HELPERS
const getReviews = async (id) => {
  try {
    const response = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/reviews/?page=1&count=1000&product_id=${id}`);
    return response;
  }
  catch (error) {
    console.log(error);
  }



  // return new Promise((resolve, reject) => {
  //   const reviews = [];
  //   const innerRecursiveFunc = (pageCount) => {
  //     axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/reviews/?page=${pageCount}&product_id=${id}`)
  //       .then((response) => {
  //         // base case reviews empty
  //         if (response.data.results.length === 0) {
  //           resolve(questions.flat());
  //         }
  //         // recursive
  //         if (response.data.results.length > 0) {
  //           reviews.push(response.data.results);
  //           innerRecursiveFunc(pageCount + 1);
  //         }
  //       })
  //       .catch((err) => {
  //         // err does not get triggered if the page is empty.  Only if the request fails at the server.
  //         reject(err);
  //       });
  //   };
  //   innerRecursiveFunc(1);

  // });

};

const getReviewsMeta = async (id) => {
  try {
    const response = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/reviews/meta?product_id=${id}`);
    return response;
  }
  catch (error) {
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
  })

}
const reportReview = (reviewId, cb) => {
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/reviews/${reviewId}/report`)
  .then((response) => {
    cb(null, response);
  })
  .catch((err) => {
    cb(err, null);
  })

}

module.exports = {
  getProductData,
  getStyles,
  getRelated,
  getReviews,
  getReviewsMeta,
  markHelpful,
  reportReview
};
