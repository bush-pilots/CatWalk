import React from 'react';
import RatingsSummary from './RatingsSummary';
import RatingsBreakdown from './RatingsBreakdown';
import ProductBreakdown from './ProductBreakdown';

var Ratings = ({ reviews, reviewsMeta, isFetching }) => {

  return (
    <>
      <div className="ratingsSummary">
        <RatingsSummary reviewsMeta={reviewsMeta} reviews={reviews} />
      </div>
      <div className="ratingsBreakdown">
        <RatingsBreakdown reviewsMeta={reviewsMeta} reviews={reviews} />
      </div>
      <div className="productBreakdown">
        <ProductBreakdown isFetching={isFetching} reviewsMeta={reviewsMeta} reviews={reviews} />
      </div>
    </>



  )

};

export default Ratings