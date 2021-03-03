import React from 'react';

class RatingsReviewsParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  // /api/fec2/hr-bld/reviews?product_id=####

  render() {
    return (
      <div>
        Ratings and Reviews
        <div>
          {this.props.reviews.length}
        </div>
      </div>

    );
  }
}

export default RatingsReviewsParent;
