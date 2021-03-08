import React from 'react';
import Question from './Question.js';

const QuestionList = ({questions, product}) => {

  return (
    <>
    <ul className="QA-QuestionList">
        {
          questions.map(question => {
            return <Question
            question={question}
            product={product}
            key={question.question_id}/>
          })
        }
    </ul>
    </>
  );
};

export default QuestionList;