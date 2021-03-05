import React from 'react';
import RatingsSummary from './RatingsSummary';
import RatingsBreakdown from './RatingsBreakdown';
import ProductBreakdown from './ProductBreakdown';

var Ratings = ({ reviews }) => {

  return (
    <div>
      <div className="ratingsSummary">
        <RatingsSummary reviews={reviews} />
      </div>
      <div className="ratingsBreakdown">
        <RatingsBreakdown reviews={reviews} />
      </div>
      <div className="productBreakdown">
        <ProductBreakdown reviews={reviews} />
      </div>
    </div>


  )

};

export default Ratings