import React, {useState} from 'react';
import { Button } from '@material-ui/core';

const AddQuestionModal = ({product, displayModal, toggleModal}) => {
  const [question, setQuestion] = useState('');
  const [nickname, setNickname] = useState('Example: jackson11!');
  const [email, setEmail] = useState('Why did you like the product or not?');

//   POST /qa/questions

// Parameter	Type	Description
// body	text	Text of question being asked
// name	text	Username for question asker
// email	text	Email address for question asker
// product_id	integer	Required ID of the Product for which the question is posted

  const submitQuestion = () => {


    //logic for validating inputs before submission
    //utilize toggleDisplay to turn off modal (but only when inputs are validated)
    //post request to hit up form!
    console.log(product);
  };

  return (
    <div className="QA-SubmitQuestionForm">
      <div className="QA-ModalGuts">
        <div>Ask Your Question</div>
        <div>About the {product.name} Here</div>
        <div>Your Question</div>
        <textarea value={question} onChange={(event) => setQuestion(event.target.value)}></textarea>
        <div>What is your nickname?</div>
        <input value={nickname} onChange={(event) => setNickname(event.target.value)}></input>
        <p>For privacy reasons, do not use your full name or email address</p>
        <div>Your Email</div>
        <input value={email} onChange={(event) => setEmail(event.target.value)}></input>
        <p>For authentication reasons, you will not be emailed</p>
        <Button onClick={() => toggleModal()}>Cancel</Button>
        <Button onClick={() => submitQuestion()}>Submit Question</Button>
      </div>
    </div>
  );

};


export default AddQuestionModal;
