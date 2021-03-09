import React, {useState} from 'react';
import AnswerThumbnails from './AnswerThumbnails.js';

const api = require('../../../../helpers/qa.js');

const Answer = ({answer}) => {
  const [helpfulness, setHelpfulness] = useState(answer.helpfulness);
  const [helpfulClicked, setHelpfulClicked] = useState(false);
  const [reportClicked, setReportClicked] = useState(false);
  const [reported, setReported] = useState(false);

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
      setHelpfulness(helpfulness + 1);
      setHelpfulClicked(true);
      api.markQuestionOrAnswerHelpful('answers', answer.answer_id);
    };
  };

  const reportAnswer = (e) => {
    e.preventDefault();
    if (reportClicked) {
      return;
    } else {
      setReportClicked(true);
      setReported(true);
      api.reportQuestionOrAnswer('answers', answer.answer_id);
    }
  };

  return (
    <span className="QA-Answer">
    <span className="QA-AnswerTitle medium">{answer.body}</span>
    <p className="QA-AnswerInteractive small">by {answer.answerer_name}, {formatDate(answer.date)} | Helpful? <a href="#" onClick={(event) => markAnswerHelpful(event)}>Yes</a> ({helpfulness}) | &nbsp;
    {!reported ? (<a href="#" onClick={(event) => reportAnswer(event)}>Report</a>) : (<span>Reported</span>)}</p>
    <AnswerThumbnails thumbnails={answer.photos}/>
    </span>

  );

};

export default Answer;