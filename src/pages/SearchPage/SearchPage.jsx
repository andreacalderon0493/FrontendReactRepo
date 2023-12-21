import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";
import ResultList from "../../components/ResultList/ResultList";

const SearchPage = () => {
  const [resultList, setResultList] = useState([]);

  const handleSearchResults = (results) => {
    setResultList(results);
  };

  return (
    <div>
      <p>Search</p>
      <SearchBar onSearchResults={handleSearchResults} />
      <ResultList results={resultList} />
    </div>
  );
};

export default SearchPage;
