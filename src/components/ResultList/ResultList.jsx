import { Link } from "react-router-dom";

const ResultList = ({ results }) => {
  return (
    <div>
      {results.map((result, index) => (
        <div key={index}>
          <Link to={`/bookDetails/${result.id}`}>
            <h2>{result.volumeInfo.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ResultList;
