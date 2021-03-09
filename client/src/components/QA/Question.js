import React, {useState, useEffect} from 'react';
import { Button } from '@material-ui/core';
import AnswerList from './AnswerList.js';
import Modal from './Modal.js';

const api = require('../../../../helpers/qa.js');

const Question = ({question, product}) => {
  const [answers, setAnswers] = useState([]);
  const [helpfulness, setHelpfulness] = useState(question.question_helpfulness)
  const [helpfulClicked, setHelpfulClicked] = useState(false);
  const [reportClicked, setReportClicked] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);
  const [reported, setReported] = useState(false);

  useEffect( () => {
    getAnswers();
  }, [question]);

  const getAnswers = () => {
    api.getAnswers(question.question_id, (err, results) => {
      setAnswers(results);
    });
  };

  const markQuestionHelpful = (e) => {
    e.preventDefault();
    if (helpfulClicked) {
      return;
    } else {
      setHelpfulClicked(true);
      setHelpfulness(helpfulness + 1);
      api.markQuestionOrAnswerHelpful('questions', question.question_id);
    };
  };

  const reportQuestion = (e) => {
    e.preventDefault();
    if (reportClicked) {
      return;
    } else {
      setReportClicked(true);
      setReported(true);
      api.reportQuestionOrAnswer('questions', question.question_id);
    };
  };

  const toggleModal = (e) => {
    if (e) {
      e.preventDefault();
    }
    setDisplayModal(!displayModal);
  };

  return (
    <div className="QA-Question">
    <span className="Question-Title medium">Q: &emsp;{question.question_body}</span>

    <p className="Question-Interactive small">Helpful? <a href="#" onClick={(event) => markQuestionHelpful(event)}>Yes</a> ({helpfulness}) | <a href="#" onClick={(event) => toggleModal(event)}>Add Answer</a></p>

    <AnswerList answers={answers}/>

    {displayModal && (<Modal questionModal={false} question={question} product={product} displayModal={displayModal} toggleModal={toggleModal}/>)}
    </div>
  );

};

// {!reported ? (<a href="#" onClick={(event) => reportQuestion(event)}>Report</a>) : (<span>Reported</span>)}</p>

export default Question;