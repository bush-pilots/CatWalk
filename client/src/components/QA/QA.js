import React, {useState, useEffect} from 'react';
import QuestionList from './QuestionList.js';

const api = require('../../../../helpers/api');

const QA = ({id}) => {
  const [questions, setQuestions] = useState([]);
  const [count, setCount] = useState(4);

  useEffect( () => {
    getQuestions();
  }, []);

  const getQuestions = () => {
    api.getQuestions(id, count, (err, results) => {
      setQuestions(results);
    })
  }

  //click handler for Add More Questions
  //increment count by two and call getQuestions

  return (
    <div>
    <div>QUESTIONS and ANSWERS</div>
    <div>Search Bar Placeholder</div>
    <QuestionList questions={questions} />
    {questions.length > 2 && (<button>MORE ANSWERED QUESTIONS</button>)}
    <button>ADD A QUESTION +</button>
    </div>
  )
};

export default QA;