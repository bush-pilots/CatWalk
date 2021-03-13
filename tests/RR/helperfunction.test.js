// test material
import RatingsBreakdown from '../../client/src/components/RR/RatingsBreakdown';

const ratingsAverager = (reviewsArray) => {
  // sum all reviews and divide by length to nearest tenth
  if (reviewsArray.length > 0) {
    var sum = 0;
    for (var i = 0; i < reviewsArray.length; i++) {
      sum += reviewsArray[i].rating;
    }
    return (sum / reviewsArray.length).toFixed(1);
  }
}

const charContainersDontMatch = (oldObj, newObj) => {
  //use id in oldObj to lookup id in the new newObj
  //if undefined return false, otherwise true
  for (var key in oldObj) {
    var id = oldObj[key].id;
    if (newObj[id] === undefined) {
      return true;
    }
  }
  return false;
}

//test out helper functions

//charContainersDontMatch

  describe('Compare two objects, check to see if all id value\'s property\'s in obj1 are the same as the keys in obj2', () => {

    //cases
    //returns false when all keys match
    //returns true when one key does not match
    //returns false when all keys match obj1 but obj2 has more keys
    it('should return false when all keys match', () => {
      const obj1 = {
        size: {id: 1563},
        width: {id: 1343},
        height: {id: 2},
        pattern: {id: 4}
      }
      const obj2 = {
        4: 'yo',
        1343: 'you',
        1563: 'hey',
        2: 'yolo'
      }
      expect(charContainersDontMatch(obj1, obj2)).toBe(false);
    })

    it('should return true when one key in obj2 does not match an id value in obj1', () => {
      const obj1 = {
        size: {id: 1513},
        width: {id: 1343},
        height: {id: 2},
        pattern: {id: 4}
      }
      const obj2 = {
        4: 'yo',
        1343: 'you',
        1563: 'hey',
        2: 'yolo'
      }

      expect(charContainersDontMatch(obj1, obj2)).toBe(true);
    })

    it('should return false when all id\'s in obj1 match keys in obj2 but obj2 has more keys', () => {
      const obj1 = {
        size: {id: 1563},
        width: {id: 1343},
        height: {id: 2},
        pattern: {id: 4}
      }
      const obj2 = {
        4: 'yo',
        1343: 'you',
        1563: 'hey',
        2: 'yolo',
        fire: 'theres a fire in here',
        'hello': 'cuttlefish'
      }
      expect(charContainersDontMatch(obj1, obj2)).toBe(false);
    })

  })

  describe('Ratings Averager is a function that takes in an array of ratings objects with a rating number and returns the average to the first decimal as a string', () => {

    //cases gives the average of positive integers to 1 decimal space
    //gives the average of negative integers to one decimal space
    //gives an error with an array of non numbers

    it('should return the average of positive array of integers to the first decimal place as a string', () => {
      const numbers = [
        {rating: 8},
        {rating: 1},
        {rating: 35},
        {rating: 3},
        {rating: 4},
        {rating: 21},
        {rating: 6}
      ];
      expect(ratingsAverager(numbers)).toBe('11.1');
    })

    it('should return the average of a negative and positive array of decimal numbers to the nearest tenth as a string', () => {
      const numbers = [
        {rating: -5.64},
        {rating: -6.53},
        {rating: -6.7},
        {rating: -42.55737537},
        {rating: 6},
        {rating: 21},
        {rating: 6}
      ];
      expect(ratingsAverager(numbers)).toBe('-4.1');
    })



  })























// describe('<ReviewList />', () => {
//   it('renders two <Review /> components', () => {
//     const wrapper = shallow(<ReviewList />);
//     expect(wrapper.find(Review)).to.have.lengthOf(3);
//   });