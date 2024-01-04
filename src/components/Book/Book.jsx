import "./Book.css";

const Book = ({ bookId, result }) => {
  return (
    <div className="book">
      <img
        src={result.volumeInfo.imageLinks?.thumbnail}
        alt={result.volumeInfo.title}
      />
      <h2>Title: {result.volumeInfo.title || "N/A"}</h2>
      <h3>Author: {result.volumeInfo.authors?.join(", ") || "N/A"}</h3>
      <div>
        Description:{" "}
        {result.volumeInfo.description || "No description available."}
      </div>
    </div>
  );
};

export default Book;
