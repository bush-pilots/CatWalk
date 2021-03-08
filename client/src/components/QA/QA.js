import React, {useState, useEffect} from 'react';

import Search from './SearchBar.js';
import QuestionList from './QuestionList.js';
import Modal from './Modal.js'
import { Button } from '@material-ui/core';

const api = require('../../../../helpers/qa.js');

const QA = ({product, id}) => {
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState(null);
  const [count, setCount] = useState(2);
  const [displayModal, setDisplayModal] = useState(false);

  useEffect( () => {
    getQuestions();
  }, [id]);

  const getQuestions = () => {
    api.getQuestions(id, (err, results) => {
      setQuestions(results);
    });
  };

  const toggleModal = () => {
    setDisplayModal(!displayModal);
  };

  return (
    <div id="QA">
      <div className="QA-Header large">QUESTIONS & ANSWERS</div>

      <Search questions={questions} filteredQuestions={filteredQuestions} setFilteredQuestions={setFilteredQuestions} setCount={setCount}/>

      <QuestionList questions={filteredQuestions || questions.slice(0, count)} product={product}/>

    {(count < questions.length) && (<Button color="primary" className="QA-ShowMoreQuestions" onClick={() => {
      setCount(count + 2)}}>
        MORE ANSWERED QUESTIONS</Button>)}

        <Button onClick={() => toggleModal()} size="medium" color="primary" className="QA-AddQuestion">ADD A QUESTION +</Button>

    {(count >= questions.length) && (<Button size="medium" color="primary" className="QA-CollapseQuestions small" onClick={() => setCount(2)}>Collapse Questions</Button>)}

      {displayModal && (<Modal questionModal={true} question={null} product={product} displayModal={displayModal} toggleModal={toggleModal}/>)}

    </div>
  );
};

export default QA;