import React from 'react';
import Answer from './Answer.js';

const AnswerList = ({answers}) => (
  <ul>
      {
        answers.map(answer => {
          return <Answer
          answer={answer}
          key={answer.answer_id}/>
        })
      }
  </ul>
);

export default AnswerList;