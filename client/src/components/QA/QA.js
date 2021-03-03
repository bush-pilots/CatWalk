import React, {useState, useEffect} from 'react';
import QuestionList from './QuestionList.js';

const api = require('../../../../helpers/api');

const QA = ({id}) => {
  const [questions, setQuestions] = useState([]);
  const [count, setCount] = useState(4);

  useEffect( () => {
    console.log('idChange useEffect');
    setCount(4);
    getQuestions();
  }, [id])

  useEffect( () => {
    getQuestions();
  }, [count])

  useEffect( () => {
    if(questions.length > count) {
      setQuestions(questions => questions = questions.slice(0, count));
      console.log('count did not update in time, but I got you fam!');
    }
  }, [questions.length])

  const getQuestions = () => {
    api.getQuestions(id, count, (err, results) => {
      setQuestions(results);
    })
  };

  return (
    <div className="QA">
    <div>QUESTIONS and ANSWERS</div>
    <div>Search Bar Placeholder</div>
    <QuestionList questions={questions} />
    {questions.length > 2 && (<button onClick={() => {
      setCount(count + 2)}}>
        MORE ANSWERED QUESTIONS</button>)}
    <button>ADD A QUESTION +</button>
    </div>
  )
};

export default QA;