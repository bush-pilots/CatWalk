import React, {useState, useEffect} from 'react';
import { Button } from '@material-ui/core';

const Modal = ({questionModal, question, product, displayModal, toggleModal}) => {
  const [inputs, setInputs] = useState({questionOrAnswer: '', nickname: 'Example: bobjohnson88', email: ''});
  const [errorMessage, setErrorMessage] = useState('');
  const [errorExists, setErrorExists] = useState(false);
  const [submission, setSubmission] = useState(false);

  //using styling here for now b/c CSS stylesheet is not adding property to error message
  const styles = {
    color: 'red'
  };

  useEffect ( () => {
    if (!errorExists && submission) {
      submit();
    } else {
      setSubmission(false);
    }
  }, [submission])

//   POST /qa/questions

// Parameter	Type	Description
// body	text	Text of question being asked
// name	text	Username for question asker
// email	text	Email address for question asker
// product_id	integer	Required ID of the Product for which the question is posted

  const submit = () => {
    console.log('hello world!');
    setSubmission(false);
    toggleModal();

    //check if answer or question
    //use appropriate API helper based on above
    //toggleModal

    //logic for validating inputs before submission
    //utilize toggleDisplay to turn off modal (but only when inputs are validated)
    //post request to hit up form!
  };

  const validate = () => {
    validateInputs();
    validateEmail();
    setSubmission(true);
  };

  const validateInputs = () => {
    if (inputs.questionOrAnswer.length === 0 || inputs.nickname.length === 0 || inputs.email.length === 0) {
      setErrorExists(true);
      setErrorMessage('Please ensure all forms are filled out and that your email is formatted correctly!');
    } else if (inputs.questionOrAnswer.length > 1000 || inputs.nickname.length > 60 || inputs.email.length > 60) {
      setErrorExists(true);
      setErrorMessage('Please ensure all forms are filled out and that your email is formatted correctly!');
    } else {
      setErrorExists(false);
    }
  };

  const validateEmail = () => {
    const validEmailRegex = RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

    if (!validEmailRegex.test(inputs.email)) {
      setErrorExists(true);
      setErrorMessage('Please ensure all forms are filled out and that your email is formatted correctly!');
    }
  };

  const handleInputChange = (e) => {
    e.persist();
    const updatedValue = {};
    updatedValue[e.target.name] = e.target.value;
    setInputs({...inputs, ...updatedValue});
  };

  return (
    <div className="QA-Modal">
      <div className="QA-ModalGuts">
      {questionModal ? (<><div>Ask Your Question</div>
        <div>About the {product.name} Here</div></>) : (<><div>Submit Your Answer</div><p>{product.name}: {question}</p></>)}
      {questionModal ? (<div>Your Question</div>) : (<div>Your Answer</div>)}
        <textarea name="questionOrAnswer" value={inputs.questionOrAnswer} onChange={(event) => handleInputChange(event)}></textarea>
        <div>What is your nickname?</div>
        <input name="nickname" value={inputs.nickname} onChange={(event) => handleInputChange(event)}></input>
        <p>For privacy reasons, do not use your full name or email address</p>
        <div>Your Email</div>
        <input name="email" value={inputs.email} onChange={(event) => handleInputChange(event)}></input>
        <p>For authentication reasons, you will not be emailed</p>
        {errorExists && (<div className="QA-ModalError" style={styles}>{errorMessage}</div>)}
        <Button color="inherit" onClick={(event) => toggleModal(event)}>Cancel</Button>
      {questionModal ? (<Button color="inherit" onClick={() => validate()}>Submit Question</Button>) :
        (<Button color ="inherit" onClick={() => validate()}>Submit Answer</Button>)}
      </div>
    </div>
  );

};

export default Modal;

