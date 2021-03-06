import Rating from '@material-ui/lab/Rating';
import React, { useState, useEffect } from 'react';

var Review = ({ review }) => {
  // body: "Esse qui et nesciunt. Rerum dicta autem placeat. Eligendi amet reiciendis rerum voluptate et quas maxime consectetur."
  // date: "2020-09-09T00:00:00.000Z"
  // helpfulness: 22
  // photos: (2) [{…}, {…}]
  // rating: 3
  // recommend: true
  // response: ""Ullam et in.""
  // review_id: 210512
  // reviewer_name: "Imelda24"
  // summary: "Aut repellendus vel."

  const [date, setDate] = useState('');

  useEffect(() => {
    //change date into the format we want
    const newDate = new Date(review.date);
    const month = newDate.toLocaleString('default', { month: 'long' });
    const day = newDate.getDate();
    const year = newDate.getFullYear();
    const date = day + ' ' + month + ', ' + year;
    setDate(date);
  })

  return (
    <div>
      <div className="tileStarContainer">
        <Rating
          className="reviewSummary"
          value={Number(review.rating)}
          max={5}
          readOnly={true}
          precision={0.25}
          size="small"
        />
        <span className="small" >{`${review.reviewer_name}, ${date}`}</span>
      </div>
      <div className="large">{review.summary}</div>
      <div className="medium">{review.body}</div>
      <div>
        <span className="small">Helpful?</span>
      </div>
    </div>


  )

};

export default Review;