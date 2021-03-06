import React, {useState, useEffect} from 'react';
import { Button } from '@material-ui/core';
import QuestionList from './QuestionList.js';
import Modal from './Modal.js'
import SearchBar from './SearchBar.js';

const api = require('../../../../helpers/qa.js');

const QA = ({product, id}) => {
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState(null);
  const [count, setCount] = useState(2);
  const [displayModal, setDisplayModal] = useState(false);

  useEffect( () => {
    setCount(2);
    getQuestions();
  }, [id]);

  const getQuestions = () => {
    api.getQuestions(id, (err, results) => {
      setQuestions(results);
    })
  };

  const toggleModal = () => {
    setDisplayModal(!displayModal);
  };

  return (
    <div id="QA">
      <div className="QA-header">QUESTIONS and ANSWERS</div>

      <SearchBar questions={questions} filteredQuestions={filteredQuestions} setFilteredQuestions={setFilteredQuestions}/>

      <QuestionList questions={filteredQuestions || questions.slice(0, count)} product={product} />
      {questions.length > 2 && (<Button className="QA-moreQuestionsButton button" onClick={() => {
        setCount(count + 2)}}>
          MORE ANSWERED QUESTIONS</Button>)}

      <Button onClick={() => toggleModal()} className="QA-addQuestionButton button">ADD A QUESTION +</Button>

        {displayModal && (<Modal questionModal={true} question={null} product={product} displayModal={displayModal} toggleModal={toggleModal}/>)}
    </div>
  );
};

export default QA;