import React, {useState, useEffect} from 'react';
import QuestionList from './QuestionList.js';
import AddQuestionModal from './AddQuestionModal';

const api = require('../../../../helpers/api');

const QA = ({product, id}) => {
  const [questions, setQuestions] = useState([]);
  const [count, setCount] = useState(2);
  const [displayModal, setDisplayModal] = useState(false);

  useEffect( () => {
    setCount(2);
    getQuestions();
  }, [id]);

  // useEffect( () => {
  //   getQuestions();
  // }, [count]);

  // useEffect( () => {
  //   if(questions.length > count) {
  //     setQuestions(questions => questions = questions.slice(0, count));
  //     console.log('count did not update in time, but I got you fam!');
  //   }
  // }, [questions.length]);

  const getQuestions = () => {
    api.getQuestions(id, (err, results) => {
      setQuestions(results);
    })
  };

  const toggleModal = () => {
    setDisplayModal(!displayModal);
  }

  return (
    <div id="QA">
    <div className="QA-header">QUESTIONS and ANSWERS</div>
    <div>Search Bar Placeholder</div>
    <QuestionList questions={questions.slice(0, count)} />
    {questions.length > 2 && (<button className="QA-moreQuestionsButton button" onClick={() => {
      setCount(count + 2)}}>
        MORE ANSWERED QUESTIONS</button>)}
    <button onClick={() => toggleModal()} className="QA-addQuestionButton button">ADD A QUESTION +</button>
    <AddQuestionModal product={product.name} displayModal={displayModal} toggleModal={toggleModal}/>
    </div>
  )
};

export default QA;