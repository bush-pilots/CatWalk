import React from 'react';
import Answer from './Answer.js';

const AnswerList = ({answers}) => (
  <div className="QA-answerList">
  <ul>
      {
        answers.map(answer => {
          return <Answer
          answer={answer}
          key={answer.answer_id}/>
        })
      }
  </ul>
  </div>
);

export default AnswerList;