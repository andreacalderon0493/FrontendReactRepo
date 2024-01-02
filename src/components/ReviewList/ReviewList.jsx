import { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const ReviewList = ({ bookId }) => {
  const [user, token] = useAuth();
  const [reviews, setReviews] = useState([]);

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
      console.log(response);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id}>
          <p>User: {review.user.username}</p>
          <p>Rating: {review.rating}</p>
          <p>Is Favorite: {review.isFavorite ? "Yes" : "No"}</p>
          <p>Review: {review.text}</p>
          <p>Average: {review.average}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
