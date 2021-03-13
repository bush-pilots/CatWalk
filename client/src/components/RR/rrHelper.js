//helper function for sorting ratings and reviews


const relevance = (reviewArray) => {

  var score = (objArray) => {
    function dateDiffInDays(a, b) {
      const _MS_PER_DAY = 1000 * 60 * 60 * 24;
      // Discard the time and time-zone information.
      const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
      const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

      return Math.floor((utc2 - utc1) / _MS_PER_DAY);
    }
    var sortedArray = [];
    for (var obj of objArray) {
      // calculate score
      var hScore = obj.helpfulness * 3;
      var dateScore = Math.abs(dateDiffInDays(new Date(obj.date), new Date())) * -0.5;
      sortedArray.push([obj, hScore + dateScore])
    }
    return sortedArray
  }
  const newScore = score(reviewArray);
  //bubble sort that array based on the scores
  const bubbleSort = (nestedArray) => {
    // takes a nested array, compares the second value of the the current index with the second value of the next index

    const sorted = (nestedArray) => {
      for (var i = 0; i < nestedArray.length - 1; i++) {
        if (nestedArray[i][1] < nestedArray[i + 1][1]) {
          return false;
        }
      }
      return true;
    }

    var innerRecurse = (array) => {
      //base case, no swaps
      if (sorted(array)) {
        return array;
      }

      for (var i = 0; i < array.length - 1; i++) {
        // if index i < index i + 1 => swap
        if (array[i][1] < array[i + 1][1]) {
          //swap
          let currentElement = array[i];
          let oneElementForward = array[i + 1];
          array[i] = oneElementForward;
          array[i + 1] = currentElement;
        }
      }
      return innerRecurse(array)
    }
    return innerRecurse(nestedArray);
  }


  //return the reviewArray sorted correctly
  var newOrder = bubbleSort(newScore);
  //place into a new array and return that
  var newCollection = [];
  for (var e of newOrder) {
    newCollection.push(e[0])
  }
  return newCollection;
};


const filterStars = (starCount, sortedReviewsArray) => {
  //IOCE -input is current starCount filter state number
  //output is an array of reviews that match that star count

  const collection = [];

  for (var review of sortedReviewsArray) {
    if (review.rating === starCount) {
      collection.push(review)
    }
  }

  return collection;
};


module.exports = {
  relevance,
  filterStars
}