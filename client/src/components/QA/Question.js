import React, {useState, useEffect} from 'react';

const api = require('../../../../helpers/api');

const Question = ({question}) => {
  const [answers, setAnswers] = useState([]);
  const [count, setCount] = useState(2);

  // useEffect(()=> {
  //   getAnswers();
  // }, []);

  // const getAnswers = () => {
  //   api.getAnswers(question.question_id, (err, results) => {
  //     setAnswers(results);
  //   });
  // };

  return (
    <>
    <div>{question.question_body}</div>
    </>
  );

};

export default Question;