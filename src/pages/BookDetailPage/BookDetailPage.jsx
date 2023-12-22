import { useState } from "react";
import Book from "../../components/Book/Book";
import { useParams } from "react-router-dom";

const BookDetailPage = ({}) => {
  const [book, setBook] = useState([]);
  const { bookId } = useParams();

  return (
    <div>
      <h2>Book Details</h2>
      <Book bookId={bookId} />
    </div>
  );
};

export default BookDetailPage;
