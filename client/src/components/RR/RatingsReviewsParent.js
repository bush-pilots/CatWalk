/* eslint-disable no-plusplus */
/* eslint-disable class-methods-use-this */
import React from 'react';
import Rating from '@material-ui/lab/Rating';

class RatingsReviewsParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // /api/fec2/hr-bld/reviews?product_id=####
  ratingsAverager(reviewsArray) {
    // use this method to render the average
    // IOCE - input is an array of reviews
    // output is a number
    // sum all reviews and divide by lenght to nearest tenth
    if (reviewsArray.length > 0) {
      var sum = 0;
      for (var i = 0; i < reviewsArray.length; i++) {
        sum += reviewsArray[i].rating;
      }
      return (sum / reviewsArray.length).toFixed(1);
    }
  }


  // componentDidUpdate(prevProps) {
  //   //check if reviews are different than previous props
  //   //if so then render
  //   //this is build in to smooth out the render.  Still slow though
  //   //there are about 4 renders before the 5th comes in passing the correct props
  //   if (prevProps.reviews !== this.props.reviews) {
  //     console.log('updated')
  //     this.setState({
  //       reviews: this.props.reviews
  //     });
  //   }

  // }
  // componentDidMount() {
  //   console.log('mounted')
  // }

  render() {
    return (
      <div>
        <p>
          Ratings &amp; Reviews <br></br>
        </p>
        <div className="ratingsSummaryContainer">
          <span className="average">{this.ratingsAverager(this.props.reviews)}</span>

          {console.log(Number(this.ratingsAverager(this.props.reviews)))}
          <Rating
            className="ratingsSummary"
            value={Number(this.ratingsAverager(this.props.reviews))}
            max={5}
            readOnly={true}
            precision={0.25}
            size="small"
          />
        </div>
      </div>

    );
  }
}

export default RatingsReviewsParent;
