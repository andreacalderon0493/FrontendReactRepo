import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Book from "../../components/Book/Book";
import ReviewList from "../../components/ReviewList/ReviewList";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const BookDetailPage = ({}) => {
  const [book, setBook] = useState(null);
  const { bookId } = useParams();
  const [user, token] = useAuth();

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookId}`)
      .then((res) => res.json())
      .then((data) => setBook(data.items[0]));
  }, [bookId]);

  const toggleFavorite = async () => {
    try {
      await axios.post(
        `https://localhost:5001/api/BookDetails/${bookId}/ToggleFavorite`,
        {},
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      // Refresh the book details after toggling the favorite status
      fetchBookDetails();
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const fetchBookDetails = async () => {
    try {
      let response = await axios.get(
        `https://localhost:5001/api/BookDetails/${bookId}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      setBook(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div>
      <h2>Book Details</h2>
      {book && (
        <button onClick={toggleFavorite}>
          {book.IsFavorited ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      )}
      {book && <Book bookId={bookId} result={book} />}
      <ReviewList bookId={bookId} />
    </div>
  );
};

export default BookDetailPage;
