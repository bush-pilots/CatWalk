import React, {useState, useEffect} from 'react';
import AnswerList from './AnswerList.js';

const api = require('../../../../helpers/api');

//add link to "YES" that hits helpful POST API

//add click functionality to add more answers just like /w more questions

//add link to AddAnswer that opens modal and allows form submission

const Question = ({question}) => {
  const [answers, setAnswers] = useState([]);
  const [count, setCount] = useState(2);

  useEffect( () => {
    setCount(2);
    getAnswers();
  }, [question]);

  const getAnswers = () => {
    api.getAnswers(question.question_id, count, (err, results) => {
      setAnswers(results);
    });
  };

  return (
    <>
    <div>Q: {question.question_body}</div>
    <p>Helpful? Yes ({question.question_helpfulness}) | AddAnswerLink</p>
    <p>A:</p><AnswerList answers={answers}/>
    <div>Load More Answers</div>
    </>
  );

};

export default Question;