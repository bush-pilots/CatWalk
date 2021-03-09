import React, { useState, useEffect } from 'react';
import Review from './Review';
import ReviewFormModal from './ReviewFormModal';

var ReviewList = ({ reviews, reviewsMeta, updateReviews, isFetching, productData }) => {
  //add buttons later

  const [isReviews, setShowReviews] = useState(false);
  const [upperReviewRange, setUpperReviewRange] = useState(2);
  const [reviewsDisplay, setReviewDisplay] = useState([]);
  const [showButtons, setShowButtons] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false);

  var incrementReviewNumber = () => {
    //check length of reviews, if length shorter than two only adjust it to that

    const newRange = upperReviewRange + 2;
    setUpperReviewRange(newRange);
  }


  var clickOpenReviewForm = () => {
    console.log(productData.name)
    setShowReviewForm(true);
  }

  useEffect(() => {
    //if product id changes, reset upper review range to 2
    setUpperReviewRange(2);
  }, [reviewsMeta.product_id])

  useEffect(() => {
    // console.log('how many reviews are displayed', reviewsDisplay.length)
    // console.log('how many reviews are displayed', reviewsDisplay)
    // console.log('Amount of reviews coming from server: ', reviews.length)
    //if it gets buggy, then have a conditional that tests for not fetching and there are reviews

    if (reviewsDisplay.length + 1 >= reviews.length) {
      setShowButtons(false);
    } else {
      console.log('showing buttons')
      setShowButtons(true);
    }

  }, [reviewsDisplay])

  useEffect(() => {
    //do things when a new render triggers
    if (reviews.length > 0) {
      setShowReviews(true);
      //if there are display current number in state
      //are there at least 2 more to display?  If only 1 then display only 1.
      // console.log('i\'m running through now.')
      var collectReviewsToDisplay = [];
      for (var i = 0; i < upperReviewRange; i++) {
        if (reviews[i] !== undefined) {
          // console.log('got reviews at index i=', i)
          collectReviewsToDisplay.push(<Review key={i} review={reviews[i]} reviewsMeta={reviewsMeta} updateReviews={updateReviews} />);
        } else {
          //we found the current limit of reviews for this product
          //set upperReviewRange to this.  So if those reviews are created, we don't
          //suddently display all that
          //Sets the upper review range to the next even number up in case we navigate to a new page
          // console.log('no more reviews at index i=' + i + ' and setting upper range to  ' + (i))
          setUpperReviewRange(i)
          break;
          //When I set the upper review range within this usestate it does not cause an infinite loop somehow, even though this usestate is triggered based on it changing...
        }
      }
      // console.log(collectReviewsToDisplay)
      setReviewDisplay(collectReviewsToDisplay);
    } else {
      setShowReviews(false);
    }


    //without conditionally firing
    // update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.

    // If you use this optimization, make sure the array includes all values from the component scope (such as props and state) that change over time and that are used by the effect. Otherwise, your code will reference stale values from previous renders.

  }, [reviews, upperReviewRange]);

  // reviews.map((review, i) => (<Review key={i} review={review} reviewsMeta={reviewsMeta} updateReviews={updateReviews}/>))

  return (
    <>
      {isReviews && !isFetching ? (showButtons ?
        <>
          <div>{reviewsDisplay}</div>
          <div className="reviewListButtonContainer">
            <button
              className="reviewButton"
              onClick={incrementReviewNumber}
            >MORE REVIEWS</button>
            <button
              className="reviewButton"
              onClick={clickOpenReviewForm}
            >ADD A REVIEW ➕</button>
          </div>
         {showReviewForm? <ReviewFormModal productData={productData} /> : null}
        </> :
        <>
          <div>{reviewsDisplay}</div>
          <div className="reviewListButtonContainer">
            <button
              className="reviewButton"
              onClick={clickOpenReviewForm}
            >ADD A REVIEW ➕</button>
          </div>
          {showReviewForm? <ReviewFormModal productData={productData} /> : null}
        </>
      ) : (!isFetching ?
        <>
        <div className="reviewListButtonContainer">
          <button
            className="reviewButton"
            onClick={clickOpenReviewForm}
          >ADD A REVIEW ➕</button>
        </div>
        {showReviewForm? <ReviewFormModal productData={productData} /> : null}
        </>
        : <></>
      )}
    </>
  )


};

export default ReviewList