import React from 'react';
import Review from './Review';

var ReviewList = ({reviews, reviewsMeta, updateReviews}) => {
  //add buttons later

  return (
    <>
    {reviews.map((review, i) => (<Review key={i} review={review} reviewsMeta={reviewsMeta} updateReviews={updateReviews}/>))}
    </>
  )

};

export default ReviewList