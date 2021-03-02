import React from 'react';
import Question from './Question.js';

const QuestionList = ({questions}) => (
  <ul>
      {
        questions.map(question => {
          return <Question
          question={question}
          key={question.question_id}/>
        })
      }
  </ul>
);

export default QuestionList;