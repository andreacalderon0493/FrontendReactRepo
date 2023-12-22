import { useParams } from "react-router-dom";

const Book = ({ bookId }) => {
  return (
    <div>
      <h1>{bookId}</h1>
    </div>
  );
};

export default Book;
