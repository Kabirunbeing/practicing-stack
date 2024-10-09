import React, { useState, useEffect } from "react";
import { createReview, fetchReviews } from "../api";

const ReviewForm = () => {
  const [reviews, setReviews] = useState([]);
  const [product, setProduct] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  // Fetch all reviews when the component mounts
  useEffect(() => {
    const getReviews = async () => {
      const reviewsData = await fetchReviews();
      setReviews(reviewsData);
    };
    getReviews();
  }, []);

  // Handle form submission to create a new review
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!product || !rating || !comment) {
      console.error("All fields are required");
      return; // Prevent submission if fields are empty
    }

    const newReview = { product, rating, comment };
    const response = await createReview(newReview);
    console.log("Review created:", response);
    setReviews([...reviews, response]); // Add the new review to the state

    // Clear form fields after submission
    setProduct("");
    setRating(0);
    setComment("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-md bg-white">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-2xl font-bold text-center">Create Review</h2>
        <input
          type="text"
          placeholder="Product"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          required
          className="w-full p-2 border rounded-md"
        />
        <input
          type="number"
          placeholder="Rating (1-5)"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          min="1"
          max="5"
          required
          className="w-full p-2 border rounded-md"
        />
        <textarea
          placeholder="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          className="w-full p-2 border rounded-md"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Create Review
        </button>
      </form>

      <h3 className="text-xl font-semibold mt-6">Existing Reviews</h3>
      <ul className="mt-4 space-y-2">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <li key={review._id || review.product + review.rating} className="p-2 border rounded-md shadow-sm">
              {review.product} - Rating: {review.rating} - {review.comment}
            </li>
          ))
        ) : (
          <li className="text-gray-500">No reviews found</li>
        )}
      </ul>
    </div>
  );
};

export default ReviewForm;
