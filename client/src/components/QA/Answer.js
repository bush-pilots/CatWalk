import React from 'react';

//add link to report
//add link to helpful

const Answer = ({answer}) => {

  return (
    <>
    <div>{answer.body}</div>
    <p>{answer.answerer_name}, {answer.date} | Helpful? Yes({answer.helpfulness}) | Report</p>

    </>
  );

};

export default Answer;