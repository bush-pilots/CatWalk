import React, {useState, useEffect} from 'react';
import AnswerList from './AnswerList.js';

const api = require('../../../../helpers/api');

//add link to "YES" that hits helpful POST API
//add link
//add onClick to link that triggers method
//write method
  //method should grab current helpfulness rating and increment
  //method should invoke helper function from API

//add link to AddAnswer that opens modal and allows form submission

const Question = ({question}) => {
  const [answers, setAnswers] = useState([]);
  const [count, setCount] = useState(2);
  const [helpfulClicked, setHelpfulClicked] = useState(false);
  const [reportClicked, setReportClicked] = useState(false);

  useEffect( () => {
    setCount(2);
    getAnswers();
  }, [question]);

  const getAnswers = () => {
    api.getAnswers(question.question_id, (err, results) => {
      setAnswers(results);
    });
  };

  const markQuestionHelpful = (e) => {
    e.preventDefault();
    if (helpfulClicked) {
      return;
    } else {
      setHelpfulClicked(true);

      api.markQuestionHelpful(question.question_id,
      (err, results) => {
        if (err) {
          console.log(err);
        } else {
          console.log(results);
        }
      });
    };
  };

  const reportQuestion = (e) => {
    e.preventDefault();
    if (reportClicked) {
      return;
    } else {
      setReportClicked(true);

      api.reportQuestion(question.question_id, (err, results) => {
        if (err) {
          console.log(err);
        } else {
          console.log(results);
        }
      })
    };

  };

  return (
    <div className="QA-question">
    <div>Q: {question.question_body}</div>

    <p>Helpful? <a href="#" onClick={(event) => markQuestionHelpful(event)}>Yes</a> ({question.question_helpfulness}) | AddAnswerLink | <a href="#" onClick={(event) => reportQuestion(event)}>Report</a></p>
    <p>A:</p><AnswerList answers={answers.slice(0, count)}/>
    {answers.length > 2 && (<button className="QA-moreAnswersButton button"
    onClick={() => {
      setCount(count + 2)}}>
        LOAD MORE ANSWERS</button>)}
    </div>
  );

};

export default Question;