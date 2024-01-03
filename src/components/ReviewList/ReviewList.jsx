import { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import "./ReviewList.css";

const ReviewList = ({ bookId }) => {
  const [user, token] = useAuth();
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);

  const fetchReviews = async () => {
    try {
      let response = await axios.get(
        `https://localhost:5001/api/BookDetails/${bookId}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      setReviews(response.data.reviews);
      setAverageRating(response.data.average);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [token]);

  const submitReview = async () => {
    try {
      const url = `https://localhost:5001/api/Reviews`;

      const data = {
        bookId: bookId,
        Text: reviewText,
        rating: rating,
      };

      const response = await axios.post(url, data, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (response.data) {
        fetchReviews();
      }
      setReviewText("");
      setRating(0);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="flex-container">
      <h2>Average Rating: {averageRating}</h2>
      <h2>User Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id}>
          <p>User: {review.user.userName}</p>
          <p>Review: {review.text}</p>
          <p>Rating: {review.rating}</p>
        </div>
      ))}
      <div className="flex-container">
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
        <p>Rate (1-5)</p>
        <select
          value={rating}
          onChange={(e) => setRating(parseInt(e.target.value))}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button onClick={submitReview}>Submit Review</button>
      </div>
    </div>
  );
};

export default ReviewList;
