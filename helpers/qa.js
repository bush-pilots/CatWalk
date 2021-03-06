const axios = require('axios');
const config = require('../config.js');

axios.defaults.headers.common.authorization = config.API_TOKEN;

const getQuestions = (id, cb) => {
  const questions = [];

  const getAnotherPage = (page) => {

    const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/questions?product_id=${id}&page=${page}&count=100&sort=helpful`;

    axios.get(url)
      .then((response) => {
        if (response.data.results.length === 0) {
          cb(null, questions.flat());
        }
        if (response.data.results.length > 0) {
          questions.push(response.data.results);
          getAnotherPage(page + 1);
        }
      })
      .catch((err) => cb(err, null));
  };
  getAnotherPage(1);
};

const getAnswers = (id, cb) => {
  const answers = [];

  const getAnotherPage = (page) => {
    const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/questions/${id}/answers?page=${page}&count=100&sort=helpful`;

    axios.get(url)
      .then((response) => {
        if (response.data.results.length === 0) {
          cb(null, answers.flat());
        }
        if (response.data.results.length > 0) {
          answers.push(response.data.results);
          getAnotherPage(page + 1);
        }
      })
      .catch((err) => cb(err, null));
  };
  getAnotherPage(1);
};

const markQuestionOrAnswerHelpful = (QorA, id, cb) => {
  const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/${QorA}/${id}/helpful`;

  axios.put(url)
    .then((response) => cb(null, response))
    .catch((err) => cb(err, null));
};

const reportQuestionOrAnswer = (QorA, id, cb) => {
  const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/${QorA}/${id}/report`;

  axios.put(url)
    .then((response) => cb(null, response))
    .catch((err) => cb(err, null));
}

const submitQuestion = async (params, cb) => {
  try {
    const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/questions`;
    const resp = axios.post(url, params);
    console.log(resp);
  }
  catch {
    console.log(err);
  }
};

const submitAnswer = (id, params, cb) => {
  const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/questions/${id}/answers`;

  console.log(params);

  axios.post(url, params)
    .then((response) => cb(null, response))
    .catch((err) => cb(err, null));
};

module.exports = {
  getQuestions,
  getAnswers,
  markQuestionOrAnswerHelpful,
  reportQuestionOrAnswer,
  submitQuestion,
  submitAnswer
};