import React, {useState, useEffect} from 'react';
import AnswerList from './AnswerList.js';

const api = require('../../../../helpers/api');

const Question = ({question}) => {
  const [answers, setAnswers] = useState([]);
  const [count, setCount] = useState(2);

  return (
    <>
    <div>Q: {question.question_body}</div>
    <p>Helpful? Yes ({question.question_helpfulness}) | AddAnswerLink</p>
    </>
  );

};

export default Question;