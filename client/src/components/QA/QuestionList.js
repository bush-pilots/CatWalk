import React from 'react';
import Question from './Question.js';

const QuestionList = ({questions, product}) => (
  <div className="QA-questionList">
  <ul>
      {
        questions.map(question => {
          return <Question
          question={question}
          product={product}
          key={question.question_id}/>
        })
      }
  </ul>
  </div>
);

export default QuestionList;