import { useState, useEffect } from "react";
import Book from "../../components/Book/Book";
import { useParams } from "react-router-dom";

const BookDetailPage = ({}) => {
  const [book, setBook] = useState(null);
  const { bookId } = useParams();
  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookId}`)
      .then((res) => res.json())
      .then((data) => setBook(data.items[0]));
  }, [bookId]);

  return (
    <div>
      <h2>Book Details</h2>
      {book && <Book bookId={bookId} result={book} />}
    </div>
  );
};

export default BookDetailPage;
