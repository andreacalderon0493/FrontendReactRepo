import { Link } from "react-router-dom";

const ResultList = ({ results }) => {
  return (
    <div>
      {results.map((result, index) => (
        <div key={index}>
          <Link to={`/bookDetails/${result.id}`}>
            <h2>{result.volumeInfo.title}</h2>
          </Link>
          {/* <p>Author: {result.volumeInfo.authors?.join(", ") || "N/A"}</p> */}
          {/* <p>Publisher: {result.volumeInfo.publisher || "N/A"}</p>
          <p>Published Date: {result.volumeInfo.publishedDate || "N/A"}</p>
          <p>
            Description:{" "}
            {result.volumeInfo.description || "No description available."}
          </p> */}
        </div>
      ))}
    </div>
  );
};

export default ResultList;
