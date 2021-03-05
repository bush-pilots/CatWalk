import React, {useState, useEffect} from 'react';
import { Button } from '@material-ui/core';
import AnswerList from './AnswerList.js';
import Modal from './Modal.js';

const api = require('../../../../helpers/qa.js');

const Question = ({question, product}) => {
  const [answers, setAnswers] = useState([]);
  const [count, setCount] = useState(2);
  const [helpfulClicked, setHelpfulClicked] = useState(false);
  const [reportClicked, setReportClicked] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);

  useEffect( () => {
    setCount(2);
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

      api.markQuestionOrAnswerHelpful('questions', question.question_id,
      (err, results) => {
        if (err) {
          console.log(err);
        } else {
          console.log(results);
        }
      });
    };
  };

  const reportQuestion = (e) => {
    e.preventDefault();
    if (reportClicked) {
      return;
    } else {
      setReportClicked(true);

      api.reportQuestionOrAnswer('questions', question.question_id, (err, results) => {
        if (err) {
          console.log(err);
        } else {
          console.log(results);
        }
      })
    };
  };

  const toggleModal = (e) => {
    if (e) {
      e.preventDefault();
    }
    setDisplayModal(!displayModal);
  };

  return (
    <div className="QA-question">
    <div>Q: {question.question_body}</div>

    <p>Helpful? <a href="#" onClick={(event) => markQuestionHelpful(event)}>Yes</a> ({question.question_helpfulness}) | <a href="#" onClick={(event) => toggleModal(event)}>Add Answer</a> | <a href="#" onClick={(event) => reportQuestion(event)}>Report</a></p>

    {answers.length > 0 && <p>A:</p>}
    <AnswerList answers={answers.slice(0, count)}/>
    {answers.length > 2 && (<Button className="QA-moreAnswersButton button"
    onClick={() => {
      setCount(count + 2)}}>
      LOAD MORE ANSWERS</Button>)}

    {displayModal && (<Modal questionModal={false} question={question} product={product} displayModal={displayModal} toggleModal={toggleModal}/>)}
    </div>
  );

};

export default Question;