import React, {useState, useEffect} from 'react';

import Search from './SearchBar.js';
import QuestionList from './QuestionList.js';
import Modal from './Modal.js'
import { Button } from '@material-ui/core';
import withListener from '../Tracker';

const api = require('../../../../helpers/qa.js');

const QA = ({onClick, product, id}) => {
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState(null);
  const [count, setCount] = useState(2);
  const [displayModal, setDisplayModal] = useState(false);

  useEffect( () => {
    getQuestions();
    setCount(2);
  }, [id]);

  const getQuestions = () => {
    api.getQuestions(id)
      .then(data => setQuestions(data));
  };

  const toggleModal = () => {
    setDisplayModal(!displayModal);
  };

  return (
    <div id="QA" onClick={onClick}>
      <div className="QA-Header large">QUESTIONS & ANSWERS</div>

      <Search questions={questions} filteredQuestions={filteredQuestions} setFilteredQuestions={setFilteredQuestions} setCount={setCount}/>

      <QuestionList questions={filteredQuestions || questions.slice(0, count)} product={product}/>

    {(count < questions.length) && (<Button color="primary" className="QA-ShowMoreQuestions" onClick={() => {
      setCount(count + 2)}}>
        MORE ANSWERED QUESTIONS</Button>)}

        <Button onClick={() => toggleModal()} size="medium" color="primary" className="QA-AddQuestion">ADD A QUESTION +</Button>

    {(count > 2 && count >= questions.length) && (<Button size="medium" color="primary" className="QA-CollapseQuestions small" onClick={() => setCount(2)}>Collapse Questions</Button>)}

      {displayModal && (<Modal questionModal={true} question={null} product={product}
      toggleModal={toggleModal} getQuestions={getQuestions}/>)}

    </div>
  );
};

export default withListener(QA, 'QA');
