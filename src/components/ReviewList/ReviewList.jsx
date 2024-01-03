import { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const ReviewList = ({ bookId }) => {
  const [user, token] = useAuth();
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    fetchReviews();
  }, [token]);

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
      console.log(response);
    } catch (error) {
      console.log(error.response.data);
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
          <p>Rating (1- 5): {review.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
