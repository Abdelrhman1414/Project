import React, { useState } from 'react';
import './Reviews.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ rating: 0, opinion: '' });

  const handleRatingChange = (event) => {
    setNewReview({ ...newReview, rating: parseInt(event.target.value, 10) });
  };

  const handleOpinionChange = (event) => {
    setNewReview({ ...newReview, opinion: event.target.value });
  };

  const handleSubmitReview = () => {
    if (newReview.rating === 0 || newReview.opinion === '') {
      alert('Please provide both a rating and an opinion.');
      return;
    }

    setReviews([...reviews, newReview]);
    setNewReview({ rating: 0, opinion: '' });
  };

  return (
    <div className="container">
      <h2>Product Reviews</h2>
      <div>
        <label className="rating-label">
          Rating:
          <select value={newReview.rating} onChange={handleRatingChange}>
            <option value={0}>Select</option>
            <option value={1}>1 star</option>
            <option value={2}>2 stars</option>
            <option value={3}>3 stars</option>
            <option value={4}>4 stars</option>
            <option value={5}>5 stars</option>
          </select>
        </label>
      </div>
      <div>
        <label className="opinion-label">
          Opinion:
          <textarea
            value={newReview.opinion}
            onChange={handleOpinionChange}
            rows={4}
            cols={50}
          />
        </label>
      </div>
      <div>
        <button onClick={handleSubmitReview}>Submit Review</button>
      </div>
      <div>
        <h3>Customer Reviews</h3>
        <ul className="review-list">
          {reviews.map((review, index) => (
            <li key={index} className="review-item">
              <p className="review-rating">Rating: {review.rating} stars</p>
              <p className="review-opinion">Opinion: {review.opinion}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Reviews;
