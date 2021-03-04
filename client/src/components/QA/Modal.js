import React, {useState} from 'react';
import { Button } from '@material-ui/core';

const Modal = ({questionModal, question, product, displayModal, toggleModal}) => {
  const [questionOrAnswer, setQuestionOrAnswer] = useState('');
  const [nickname, setNickname] = useState('Example: jackson11!');
  const [email, setEmail] = useState('Why did you like the product or not?');

//   POST /qa/questions

// Parameter	Type	Description
// body	text	Text of question being asked
// name	text	Username for question asker
// email	text	Email address for question asker
// product_id	integer	Required ID of the Product for which the question is posted

  const submit = () => {

    //check validity of inputs
    //if not valid, display message of what needs to be fixed
    //

    //check if answer or question
    //use appropriate API helper based on above
    //toggleModal


    //logic for validating inputs before submission
    //utilize toggleDisplay to turn off modal (but only when inputs are validated)
    //post request to hit up form!
    console.log(product);
  };

  return (
    <div className="QA-SubmitQuestionForm">
      <div className="QA-ModalGuts">
      {questionModal ? (<><div>Ask Your Question</div>
        <div>About the {product.name} Here</div></>) : (<><div>Submit Your Answer</div><p>{product.name}: {question}</p></>)}
      {questionModal ? (<div>Your Question</div>) : (<div>Your Answer</div>)}
        <textarea value={questionOrAnswer} onChange={(event) => setQuestionOrAnswer(event.target.value)}></textarea>
        <div>What is your nickname?</div>
        <input value={nickname} onChange={(event) => setNickname(event.target.value)}></input>
        <p>For privacy reasons, do not use your full name or email address</p>
        <div>Your Email</div>
        <input value={email} onChange={(event) => setEmail(event.target.value)}></input>
        <p>For authentication reasons, you will not be emailed</p>
        <Button onClick={(event) => toggleModal(event)}>Cancel</Button>
        {questionModal ? (<Button onClick={() => submit()}>Submit Question</Button>) :
        (<Button onClick={() => submit()}>Submit Answer</Button>)}
      </div>
    </div>
  );

};

export default Modal;

