import React from 'react';
import Rating from '@material-ui/lab/Rating';

var RatingsSummary = ({ reviews }) => {

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

  return (
    <>
     RATINGS &amp; REVIEWS
      <div className="ratingsSummaryContainer">
        <span className="average">{ratingsAverager(reviews)}</span>
        <Rating
          className="ratingsSummary"
          value={Number(ratingsAverager(reviews))}
          max={5}
          readOnly={true}
          precision={0.25}
          size="small"
        />
      </div>
    </>
  )


}
export default RatingsSummary;
