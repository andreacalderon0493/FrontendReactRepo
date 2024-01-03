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
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookId}`)
      .then((res) => res.json())
      .then((data) => setBook(data.items[0]));
  }, [bookId]);

  const toggleFavorite = async () => {
    try {
      const url = `https://localhost:5001/api/Favorites`;

      await axios.post(
        url,
        {},
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      // Toggle the favorite status
      setIsFavorited(!isFavorited);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div>
      <h2>Book Details</h2>
      {book && (
        <button onClick={toggleFavorite}>
          {book.isFavorited ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      )}
      {book && <Book bookId={bookId} result={book} />}
      <ReviewList bookId={bookId} />
    </div>
  );
};

export default BookDetailPage;
