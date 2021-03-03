import React, {useState} from 'react';

const api = require('../../../../helpers/api');

//add link to helpful

const Answer = ({answer}) => {
  const [helpfulClicked, setHelpfulClicked] = useState(false);
  const [reportClicked, setReportClicked] = useState(false);

  const markAnswerHelpful = (e) => {
    e.preventDefault();
    if (helpfulClicked) {
      return;
    } else {
      setHelpfulClicked(true);
      api.markAnswerHelpful(answer.answer_id, (err, results) => {
        console.log(results);
      });
    }
  };

  const reportQuestion = (e) => {
    e.preventDefault();
    if (reportClicked) {
      return;
    } else {
      setReportClicked(true);

      api.reportAnswer(answer.answer_id, (err, results) => {
        if (err) {
          console.log(err);
        } else {
          console.log(results);
        }
      });
    }
  };

  return (
    <div className="QA-answer">
    <div>{answer.body}</div>
    <p>{answer.answerer_name}, {answer.date} | Helpful? <a href="#" onClick={(event) => markAnswerHelpful(event)}>Yes</a> ({answer.helpfulness}) | <a href="#" onClick={(event) => reportAnswer(event)}>Report</a></p>
    </div>
  );

};

export default Answer;