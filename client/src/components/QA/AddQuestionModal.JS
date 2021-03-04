import React, {useState} from 'react';

const AddQuestionModal = ({product, displayModal, toggleModal}) => {
  const [question, setQuestion] = useState('');
  const [nickname, setNickname] = useState('Example: jackson11!');
  const [email, setEmail] = useState('Why did you like the product or not?');

  const submitQuestion = () => {
    //logic for validating inputs before submission
    //utilize toggleDisplay to turn off modal (but only when inputs are validated)
    //post request to hit up form!
    toggleModal();
  }

  return (
    <>
    {displayModal && (
      <div className="QA-AddQuestionModal">
        <div>Ask Your Question</div>
        <div>About the {product} Here</div>
        <div>Your Question</div>
        <textarea value={question} onChange={(event) => setQuestion(event.target.value)}></textarea>
        <div>What is your nickname?</div>
        <input value={nickname} onChange={(event) => setNickname(event.target.value)}></input>
        <p>For privacy reasons, do not use your full name or email address</p>
        <div>Your Email</div>
        <input value={email} onChange={(event) => setEmail(event.target.value)}></input>
        <p>For authentication reasons, you will not be emailed</p>
        <button onClick={() => submitQuestion()}>Submit Question</button>
      </div>
    )}
    </>
  );

};

export default AddQuestionModal;