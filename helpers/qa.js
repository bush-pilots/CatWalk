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

// const getSentence = async function(offset = 0) {
//   const fragment = await getSentenceFragment(offset)
//   if (fragment.nextPage) {
//     return fragment.data.concat(await getSentence(fragment.nextPage));
//   } else {
//     return fragment.data;
//   }
// }

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

const markQuestionOrAnswerHelpful = async (QorA, id) => {
  try {
    const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/${QorA}/${id}/helpful`;
    const response = await axios.put(url);
    console.log(response.status);
  }
  catch (error) {
    console.log(error);
  }
};

const reportQuestionOrAnswer = async (QorA, id) => {
  try {
    const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/${QorA}/${id}/report`;
    const response = await axios.put(url);
    console.log(response.status);
  }
  catch (error) {
    console.log(error);
  }
};

const submitQuestion = async (params) => {
  try {
    const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/questions`;
    const response = await axios.post(url, params);
    console.log(response.status);
  }
  catch (error) {
    console.log(error);
  }
};

const submitAnswer = async (id, params) => {
  try {
    const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/questions/${id}/answers`;
    const response = await axios.post(url, params);
    console.log(response.status);
  }
  catch (error) {
    console.log(error);
  }
};

module.exports = {
  getQuestions,
  getAnswers,
  markQuestionOrAnswerHelpful,
  reportQuestionOrAnswer,
  submitQuestion,
  submitAnswer
};
