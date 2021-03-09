const axios = require('axios');
const config = require('../config.js');

axios.defaults.headers.common.authorization = config.API_TOKEN;

//get next page helper for both questions/answers
const getNextPage = async (url) => {
  const response = await axios.get(url);
  return response.data.results;
};

const getQuestions = async (id) => {
  const questions = [];
  let page = 1;

  try {
    do {
      let url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/questions?product_id=${id}&page=${page}&count=100&sort=helpful`;

      var onePage = await getNextPage(url);
      questions.push(onePage);
      page++;
    } while (onePage.length > 0);

    return questions.flat();
  }
  catch (error) {
    console.log(error);
  }

};

const getAnswers = async (id) => {
  const answers = [];
  let page = 1;

  try {
    do {
      let url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/qa/questions/${id}/answers?page=${page}&count=100&sort=helpful`;

      var onePage = await getNextPage(url);
      answers.push(onePage);
      page++;
    } while (onePage.length > 0);

    return answers.flat();
  }
  catch (error) {
    console.log(error);
  }
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
