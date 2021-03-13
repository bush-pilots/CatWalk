/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect } from 'react';
import AnswerList from './AnswerList';
import Modal from './Modal';

const api = require('../../../../helpers/qa.js');

const Question = ({ question, product }) => {
  const [answers, setAnswers] = useState([]);
  const [helpfulness, setHelpfulness] = useState(question.question_helpfulness);
  const [helpfulClicked, setHelpfulClicked] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);

  const getAnswers = () => {
    api.getAnswers(question.question_id)
      .then((data) => {
        for (const answer of data) {
          if (answer.answerer_name === 'Seller') {
            data.splice(data.indexOf(answer), 1);
            data.unshift(answer);
          }
        }
        setAnswers(data);
      });
  };

  useEffect(() => {
    getAnswers();
  }, [question]);

  const markQuestionHelpful = (e) => {
    e.preventDefault();
    if (helpfulClicked) {
      return;
    }
    setHelpfulClicked(true);
    setHelpfulness(helpfulness + 1);
    api.markQuestionOrAnswerHelpful('questions', question.question_id);
  };

  const toggleModal = (e) => {
    if (e) {
      e.preventDefault();
    }
    setDisplayModal(!displayModal);
  };

  return (
    <div className="QA-Question">
      <span className="Question-Title medium">
        Q: &emsp;
        {question.question_body}
      </span>

      <p className="Question-Interactive small">
        Helpful?
        &nbsp;
        <a href="#" onClick={(event) => markQuestionHelpful(event)}>Yes</a>
        {' '}
        (
        {helpfulness}
        &nbsp;
        ) |
        &nbsp;
        <a href="#" onClick={(event) => toggleModal(event)}>Add Answer</a>
      </p>

      <AnswerList answers={answers} />

      {displayModal && (<Modal questionModal={false} question={question} product={product} toggleModal={toggleModal} getAnswers={getAnswers} />)}
    </div>
  );
};

export default Question;
