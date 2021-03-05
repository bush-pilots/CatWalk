import React from 'react';
import Question from './Question.js';

const QuestionList = ({questions, product, toggleModal, displayModal}) => (
  <div className="QA-questionList">
  <ul>
      {
        questions.map(question => {
          return <Question
          question={question}
          product={product}
          toggleModal={toggleModal}
          displayModal={displayModal}
          key={question.question_id}/>
        })
      }
  </ul>
  </div>
);

export default QuestionList;