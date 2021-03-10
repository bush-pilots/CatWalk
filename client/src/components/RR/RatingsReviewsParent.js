/* eslint-disable no-plusplus */
/* eslint-disable class-methods-use-this */
import React from 'react';
import Ratings from './Ratings';
import ReviewList from './ReviewList';
import withListener from '../Tracker';

class RatingsReviewsParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        <div className="ratings">
          <Ratings isFetching={this.props.isFetching} reviewsMeta={this.props.reviewsMeta} reviews={this.props.reviews} />
        </div>
        <div className="reviews">
          <ReviewList reviews={this.props.reviews} reviewsMeta={this.props.reviewsMeta} updateReviews={this.props.updateProductReviews} isFetching={this.props.isFetching}/>
        </div>
      </>

    );
  }
}

export default withListener(RatingsReviewsParent, 'RatingReviewsParent');

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

// Review Meta

// data:
// characteristics:
// Comfort: {id: 61908, value: "2.2941176470588235"}
// Quality: {id: 61909, value: "2.7647058823529412"}
// Size: {id: 61906, value: "2.9411764705882353"}
// Width: {id: 61907, value: "2.9411764705882353"}
// __proto__: Object
// product_id: "18445"
// ratings:
// 1: "7"
// 2: "2"
// 3: "3"
// 4: "2"
// 5: "3"
// __proto__: Object
// recommended: {false: "7", true: "10"}
