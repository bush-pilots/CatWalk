import React, {useState, useEffect} from 'react';
import Answer from './Answer.js';
import { Button } from '@material-ui/core';

const AnswerList = ({answers}) => {
  const [count, setCount] = useState(2);

  return (
    <div className="QA-AnswerList">
    {answers.length > 0 && (<span className="QA-AnswerListAnchor medium">A:</span>)}
      <ul className="QA-Answers">
          {
            answers.slice(0, count).map(answer => {
              return <Answer
              answer={answer}
              key={answer.answer_id}/>
            })
          }
      </ul>

    {(answers.length > 2 && count !== answers.length) && (<Button size="small" color="primary" className="QA-moreAnswersButton small"
      onClick={() => {
        setCount(answers.length)}}>
        LOAD MORE ANSWERS</Button>)}

    {(count >= answers.length && count > 2) && (<Button size="small" color="primary" className="QA-CollapseAnswers small" onClick={() => setCount(2)}>Collapse Answers</Button>)}
    </div>
  )

};

export default AnswerList;