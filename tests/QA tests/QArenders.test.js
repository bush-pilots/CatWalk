import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import QA from '../../client/src/components/QA/QA.js';
import QuestionList from '../../client/src/components/QA/QuestionList.js';
import Question from '../../client/src/components/QA/Question.js';
import AnswerList from '../../client/src/components/QA/AnswerList.js';
import Answer from '../../client/src/components/QA/Answer.js';
import Modal from '../../client/src/components/QA/Modal.js';
import SearchBar from '../../client/src/components/QA/SearchBar.js';
import Thumbnail from '../../client/src/components/QA/Thumbnail.js';
import AnswerThumbnails from '../../client/src/components/QA/AnswerThumbnails.js';

//shallow render tests for QA components

    describe("QA components should all successfully render in isolation", () =>{
      it("should render parent QA component", () => {
        const wrapper = shallow(<QA />);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

      it('parent QA component should render SearchBar', () => {
        const wrapper = shallow(<QA />);
        expect(wrapper.find(SearchBar)).toHaveLength(1);
      });

      it("should render QuestionList component", () => {
        const questions = [{question_id: 1, question_body: 'et tu Brutu'}];
        const wrapper = shallow(<QuestionList questions={questions} product={5}/>);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

      it("should render Question component", () => {
        const question = {question_body: 'Hello world'};
        const wrapper = shallow(<Question question={question}/>);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it("should render AnswerList component", () => {
      const answers = [{placeholder: 'a', answer_id: 1}, {placeholder: 'a', answer_id: 2}, {placeholder: 'a', answer_id: 3}];
      const wrapper = shallow(<AnswerList answers={answers}/>);
      expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it("should render Answer component", () => {
      const answer = {body: 'hello world', answerername: 'bob', answer_id: 5, helpfulness: 10, photos: [], date: '2018-08-18T00:00:00.000Z'};
      const wrapper = shallow(<Answer answer={answer}/>);
      expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it("should render Modal component", () => {
      const product = {name: 'Gucci shoes', id: 1};
      const wrapper = shallow(<Modal product={product} questionModal={true}/>);
      expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it("should render SearchBar component", () => {
      const wrapper = shallow(<SearchBar />);
      expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it("should render Thumbnail component", () => {
      const wrapper = shallow(<Thumbnail />);
      expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it("should render AnswerThumbnails component", () => {
      const thumbnails = [{url: "urlplaceholder/answer_5_photo_number_1.jpg", id: 1}]
      const wrapper = shallow(<AnswerThumbnails thumbnails={thumbnails}/>);
      expect(toJSON(wrapper)).toMatchSnapshot();
    });
});