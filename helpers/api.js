/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
const axios = require('axios');
const config = require('../config.js');

axios.defaults.headers.common.authorization = config.API_TOKEN;

// broken down by widget to minimize toe-on-toe action

// PRODUCTS DETAIL WIDGET HELPERS

const getProductData = (id, cb) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products/${id}`)
    .then((response) => {
      cb(null, response);
    })
    .catch((err) => cb(err, null));
};

const getStyles = (id, cb) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products/${id}/styles`)
    .then((response) => {
      cb(null, response);
    })
    .catch((err) => cb(err, null));
};

const getRelated = (id, cb) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products/${id}/related`)
    .then((response) => {
      cb(null, response);
    })
    .catch((err) => cb(err, null));
};

// RATINGS/REVIEWS WIDGET HELPERS

// Q/A WIDGET HELPERS
const getQuestions = (id, cb) => {
  // modify to recursively grab all questions!
  const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/questions?product_id=${id}&page=1&count=100&sort=helpful`;

  axios.get(url)
    .then((response) => cb(null, response.data.results))
    .catch((err) => cb(err, null));
};

const getAnswers = (id, cb) => {
  const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/questions/${id}/answers?page=1&count=100&sort=helpful`;

  axios.get(url)
    .then((response) => cb(null, response.data.results))
    .catch((err) => cb(err, null));
};

const markQuestionHelpful = (id, cb) => {
  const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/questions/${id}/helpful`;

  axios.put(url)
    .then((response) => cb(null, response))
    .catch((err) => cb(err, null));
};

const markAnswerHelpful = (id, cb) => {
  const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/answers/${id}/helpful`;

  axios.put(url)
    .then((response) => cb(null, response))
    .catch((err) => cb(err, null));
};

const reportQuestion = (id, cb) => {
  const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/questions/${id}/report`;

  axios.put(url)
    .then((response) => cb(null, response))
    .catch((err) => cb(err, null));
};

const reportAnswer = (id, cb) => {
  const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/answers/${id}/report`;

  axios.put(url)
    .then((response) => cb(null, response))
    .catch((err) => cb(err, null));
};

// RELATED ITEMS/OUTFIT WIDGET HELPERS

module.exports = {
  getProductData,
  getStyles,
  getRelated,
  getQuestions,
  getAnswers,
  markQuestionHelpful,
  markAnswerHelpful,
  reportQuestion,
  reportAnswer
};
