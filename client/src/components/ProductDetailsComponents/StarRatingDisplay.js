/* eslint-disable react/prop-types */
import React from 'react';
import RatingsSummary from '../RR/RatingsSummary';

const StarRatingDisplay = ({ reviews }) => (
  <div id="star-rating-display">
    <RatingsSummary reviews={reviews} />
  </div>
);

export default StarRatingDisplay;
