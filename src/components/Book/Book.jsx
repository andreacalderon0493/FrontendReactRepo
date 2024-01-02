const Book = ({ bookId, result }) => {
  return (
    <div>
      <img
        src={result.volumeInfo.imageLinks?.thumbnail}
        alt={result.volumeInfo.title}
      />
      <p>Title: {result.volumeInfo.title || "N/A"}</p>
      <p>Author: {result.volumeInfo.authors?.join(", ") || "N/A"}</p>
      <p>
        Description:{" "}
        {result.volumeInfo.description || "No description available."}
      </p>
    </div>
  );
};

export default Book;
