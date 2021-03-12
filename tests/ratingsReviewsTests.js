import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import RatingsReviewsParent from '../client/src/components/RR/RatingsReviewsParent';
import ReviewList from '../client/src/components/ReviewList';
import Review from '../client/src/components/Review';
import { expect } from 'chai';
import sinon from 'sinon';

describe('<ReviewList />', () => {
  it('renders two <Review /> components', () => {
    const wrapper = shallow(<ReviewList />);
    expect(wrapper.find(Review)).to.have.lengthOf(3);
  });









// describe('App', () => {
//   it('renders without crashing given the required props', () => {
//     const props = {
//       isFetching: false,
//       dispatch: jest.fn(),
//       selectedSubreddit: 'reactjs',
//       posts: []
//     }
//     const wrapper = shallow(<App {...props} />)
//     expect(toJson(wrapper)).toMatchSnapshot()
//   })
// })