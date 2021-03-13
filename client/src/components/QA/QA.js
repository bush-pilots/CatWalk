/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import Search from './SearchBar';
import QuestionList from './QuestionList';
import Modal from './Modal';
import withListener from '../Tracker';

const api = require('../../../../helpers/qa.js');

const QA = ({ onClick, product, id }) => {
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState(null);
  const [count, setCount] = useState(2);
  const [displayModal, setDisplayModal] = useState(false);

  const getQuestions = () => {
    api.getQuestions(id)
      .then((data) => setQuestions(data));
  };

  useEffect(() => {
    getQuestions();
    setCount(2);
  }, [id]);

  const toggleModal = () => {
    setDisplayModal(!displayModal);
  };

  return (
    <div id="QA" onClick={onClick}>
      <div className="QA-Header large">QUESTIONS & ANSWERS</div>

      <Search
        questions={questions}
        setFilteredQuestions={setFilteredQuestions}
        setCount={setCount}
      />

      <QuestionList
        questions={filteredQuestions || questions.slice(0, count)}
        product={product}
      />

      {(count < questions.length) && (
      <Button color="primary" className="QA-ShowMoreQuestions" onClick={() => { setCount(count + 2); }}> MORE ANSWERED QUESTIONS</Button>
      )}

      <Button color="primary" onClick={() => toggleModal()} size="medium" className="QA-AddQuestion">ADD A QUESTION +</Button>

      {(count > 2 && count >= questions.length) && (<Button color="primary" size="medium" className="QA-CollapseQuestions small" onClick={() => setCount(2)}>Collapse Questions</Button>)}

      {displayModal && (
      <Modal
        questionModal
        question={null}
        product={product}
        toggleModal={toggleModal}
        getQuestions={getQuestions}
      />
      )}
    </div>
  );
};

export default withListener(QA, 'QA');
