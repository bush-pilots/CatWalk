/* eslint-disable no-plusplus */
/* eslint-disable class-methods-use-this */
import React from 'react';
import Ratings from './Ratings';
import ReviewList from './ReviewList';

class RatingsReviewsParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div><br></br>
        <div className="ratings">
          <Ratings reviews={this.props.reviews} />
        </div>
        <div className="reviews">
          <ReviewList reviews={this.props.reviews} />
        </div>
      </div>

    );
  }
}

export default RatingsReviewsParent;

// Review object

// body: "Dolore distinctio quam eaque. Ad eveniet blanditiis praesentium eligendi. Et nesciunt assumenda aperiam culpa. Est iusto laborum dolore laborum."
// date: "2020-12-14T00:00:00.000Z"
// helpfulness: 18
// photos: (2) [{…}, {…}]
// rating: 1
// recommend: false
// response: null
// review_id: 215168
// reviewer_name: "Velma18"
// summary: "Explicabo occaecati doloremque cum consequatur ea et eos."
