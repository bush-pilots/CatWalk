const api = require('../../helpers/qa.js');
// const axios = require('axios');

// jest.mock('axios');

//tests for QA module async API functions

//for later: refactor with MOCK tests, currently these tests are vulnerable to issues with API and internet connectivity

  describe('getQuestions async should return an array of questions for a product or return status code 500 for a non-existent product ID', () => {
    it('should return an array of answers', async () => {
      const questions = await api.getQuestions(18201);
      expect(questions[0].question_id).not.toBeUndefined();
    });

    it('should return status code 500 for a non-existent product ID', async () => {
      const question = await api.getQuestions(11111111111111);
      expect(question).toBe(500);
    });
  });

  describe('getAnswers async should return an array of answers for a question and return status code 500 for a non-existent question', () => {
    it('should return an array of answers', async () => {
      const answers = await api.getAnswers(115426);
      expect(answers[0].answer_id).not.toBeUndefined();
    })

    it('should return status code 500 for a non-existent question ID', async () => {
      const answers = await api.getAnswers(11111111111111);
      expect(answers).toBe(500);
    });
  });

  describe('submitQuestion should submit a question', () => {
    it('should successfully submit a properly formatted question', async () => {
      const params = {body: 'hello world', name: 'bobjohnson22', email: 'bobjohnsonrocks@gmail.com', product_id: 18201};
      const result = await api.submitQuestion(params);
      expect(result).not.toBeUndefined();
    });
  });

  describe('submitAnswer should submit an answer', () => {
    it('should successfully submit a properly formatted answer', async () => {
      const params = {body: 'hello world', name: 'bobjohnson22', email: 'bobjohnsonrocks@gmail.com'};
      const result = await api.submitAnswer(115426, params);
      expect(result).toBe(201);
    });
  });

  describe('markQuestionOrAnswerHelpful async should successfully mark Q or A helpful or return status code 500 for non-existent question or answer', () => {
    it('successfully marks a question as helpful', async () => {
      const response = await api.markQuestionOrAnswerHelpful('questions', 115426);
      expect(response).toBe(204);
    });

    it('should return status code 500 for non-existent question', async () => {
      const response = await api.markQuestionOrAnswerHelpful('questions', 11111111111111);
      expect(response).toBe(500);
    });

    it('successfully marks an answer as helpful', async () => {
      const response = await api.markQuestionOrAnswerHelpful('answers', 1082107);
      expect(response).toBe(204);
    })

    it('should return status code 500 for non-existent answer', async () => {
      const response = await api.markQuestionOrAnswerHelpful('answers', 11111111111111);
      expect(response).toBe(500);
    });
  });

  describe('reportQuestionOrAnswerHelpful async should successfully report a Q or A and return status code 500 for non-existent question or answer', () => {
    it('successfully reports a question', async () => {
      const response = await api.reportQuestionOrAnswer('questions', 18080);
      expect(response).toBe(204);
    });

    it('should return status code 500 for non-existent question', async () => {
      const response = await api.reportQuestionOrAnswer('questions', 11111111111111);
      expect(response).toBe(500);
    });

    it('successfully marks an answer as helpful', async () => {
      const response = await api.reportQuestionOrAnswer('answers', 1082107);
      expect(response).toBe(204);
    })

    it('should return status code 500 for non-existent answer', async () => {
      const response = await api.reportQuestionOrAnswer('answers', 11111111111111);
      expect(response).toBe(500);
    });
  });
