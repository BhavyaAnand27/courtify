import React from "react";

const LawyerReviews = () => {
  const reviews = [
    { id: 1, client: "Alice", rating: 5, comment: "Excellent service!" },
    { id: 2, client: "Bob", rating: 4, comment: "Very helpful and professional." },
  ];

  return (
    <div className="lawyer-reviews">
      <h1>Reviews</h1>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <h3>{review.client}</h3>
            <p>Rating: {review.rating}</p>
            <p>Comment: {review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LawyerReviews;
