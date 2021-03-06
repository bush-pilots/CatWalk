import React from 'react';
import Review from './Review';

var ReviewList = ({reviews}) => {
  //add buttons later

  return (
    <div>
    {reviews.map((review, i) => (<Review key={i} review={review} />))}
    </div>
  )

};

export default ReviewList