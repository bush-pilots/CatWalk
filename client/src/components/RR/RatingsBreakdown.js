import React from 'react';

class RatingsBreakdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      percentage: {},
      percentageRec: 0
    }
    this.onClickFilter = this.onClickFilter.bind(this);
  }

  createStarsObject(reviewsArray) {
    if (reviewsArray.length > 0) {
      //create the obj
      let starPercentsObj = {};
      reviewsArray.map(review => {
        let rating = review.rating;
        starPercentsObj[rating] === undefined ? starPercentsObj[rating] = 1 : starPercentsObj[rating] += 1;
      })
      //now for each value / by length
      for (var key in starPercentsObj) {
        starPercentsObj[key] = Number((starPercentsObj[key] / reviewsArray.length).toFixed(2)) * 100;
      }
      let stars = [1, 2, 3, 4, 5];
      for (var star of stars) {
        if (starPercentsObj[star] === undefined) {
          starPercentsObj[star] = 0;
        }
      }
      return starPercentsObj;
    } else {
      return { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
    }
  };

  percentageRecommended(reviewsArray) {
    //IOCE - input is one reviews array
    // output is percentage of reviews that found this helpful
    let recCount = 0;
    reviewsArray.map(review => {
      if (review.recommend) {
        recCount++;
      }
    })
    return Number((recCount / reviewsArray.length).toFixed(2)) * 100
  }

  componentDidUpdate(prevProps) {
    if (prevProps.reviews !== this.props.reviews) {
      this.setState({
        percentage: this.createStarsObject(this.props.reviews),
        percentageRec: this.percentageRecommended(this.props.reviews) })

    }
  }

  onClickFilter(rating) {
    //call for new reviews, set app review state for a filter > 0
    if (this.props.filter === rating) {
      //set filter to 0
      console.log('set filter === 0')
      this.props.updateReviews(this.props.reviewsMeta.product_id, undefined, 0)
    } else {
      this.props.updateReviews(this.props.reviewsMeta.product_id, undefined, rating)
    }
  }


  // percentage of reviews that recommend the product
  // the real calculation is # of 5 star reviews / number of reviews to give percentage
  render() {
    return (
      <>
        <p className="recommendedPer">
          {isNaN(this.state.percentageRec) ? 'No reviews yet!' : `${this.state.percentageRec}% of reviewers recommend this product`}
        </p>
        <table>
          <tbody>
            <tr className="ratingsBreakdownRows" >
              <td className="starLabel" onClick={() => {this.onClickFilter(5)}}>5 stars</td>
              <td style={{ marginBottom: '2px', marginLeft: '10px', width: '190px', height: '6px', display: 'inline-block', background: `linear-gradient(to right, #00ff00 ${this.state.percentage['5']}%, grey ${this.state.percentage['5']}%)` }}></td>
            </tr>
            <tr className="ratingsBreakdownRows" >
              <td className="starLabel" onClick={() => {this.onClickFilter(4)}}>4 stars</td>
              <td style={{ marginBottom: '2px', marginLeft: '10px', width: '190px', height: '6px', display: 'inline-block', background: `linear-gradient(to right, #00ff00 ${this.state.percentage['4']}%, grey ${this.state.percentage['4']}%)` }}></td>
            </tr>
            <tr className="ratingsBreakdownRows" >
              <td className="starLabel" onClick={() => {this.onClickFilter(3)}}>3 stars</td>
              <td style={{ marginBottom: '2px', marginLeft: '10px', width: '190px', height: '6px', display: 'inline-block', background: `linear-gradient(to right, #00ff00 ${this.state.percentage['3']}%, grey ${this.state.percentage['3']}%)` }}></td>
            </tr>
            <tr className="ratingsBreakdownRows" >
              <td className="starLabel" onClick={() => {this.onClickFilter(2)}}>2 stars</td>
              <td style={{ marginBottom: '2px', marginLeft: '10px', width: '190px', height: '6px', display: 'inline-block', background: `linear-gradient(to right, #00ff00 ${this.state.percentage['2']}%, grey ${this.state.percentage['2']}%)` }}></td>
            </tr>
            <tr className="ratingsBreakdownRows" >
              <td className="starLabel" onClick={() => {this.onClickFilter(1)}}>1 stars</td>
              <td style={{ marginBottom: '2px', marginLeft: '10px', width: '190px', height: '6px', display: 'inline-block', background: `linear-gradient(to right, #00ff00 ${this.state.percentage['1']}%, grey ${this.state.percentage['1']}%)` }}></td>
            </tr>
          </tbody>
        </table>
        {this.props.filter === 0 ? <></> : <div className="small" >*selected filter {this.props.filter} </div> }
      </>
    )
  }

}
export default RatingsBreakdown;