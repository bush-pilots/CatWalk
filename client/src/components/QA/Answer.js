import React, {useState} from 'react';

const api = require('../../../../helpers/qa.js');

const Answer = ({answer}) => {
  const [helpfulClicked, setHelpfulClicked] = useState(false);
  const [reportClicked, setReportClicked] = useState(false);

  const formatDate = (date) => {
    const monthNames = ["January", "February", "March",  "April", "May", "June",  "July", "August", "September", "October", "November", "December"];
    let day = answer.date.slice(8, answer.date.indexOf('T'));
    var month = monthNames[Number(answer.date.slice(6, 7)) - 1];
    var year = answer.date.slice(0, 4);
    var formattedDate = `${month} ${day}, ${year}`;
    return formattedDate;
  };

  const markAnswerHelpful = (e) => {
    e.preventDefault();
    if (helpfulClicked) {
      return;
    } else {
      setHelpfulClicked(true);
      api.markQuestionOrAnswerHelpful('answers', answer.answer_id, (err, results) => {
        if (err) {
          console.log(err);
        } else {
          console.log(results);
        }
      });
    }
  };

  const reportAnswer = (e) => {
    e.preventDefault();
    if (reportClicked) {
      return;
    } else {
      setReportClicked(true);

      api.reportQuestionOrAnswer('answers', answer.answer_id, (err, results) => {
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
    <p>by {answer.answerer_name}, {formatDate(answer.date)} | Helpful? <a href="#" onClick={(event) => markAnswerHelpful(event)}>Yes</a> ({answer.helpfulness}) | <a href="#" onClick={(event) => reportAnswer(event)}>Report</a></p>
    </div>
  );

};

export default Answer;