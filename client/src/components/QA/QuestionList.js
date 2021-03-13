import React from 'react';
import Question from './Question';

const QuestionList = ({ questions, product }) => (
  <>
    <ul className="QA-QuestionList">
      {
      questions.map((question) => (
        <Question
          question={question}
          product={product}
          key={question.question_id}
        />
      ))
      }
    </ul>
  </>
);

export default QuestionList;
