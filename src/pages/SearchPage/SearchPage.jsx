import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";

const SearchPage = (prop) => {
  const [resultList, setResultList] = useState([]);

  async function Search() {
    console.log("");
  }

  return (
    <div>
      <p>Search</p>
      <SearchBar />
    </div>
  );
};

export default SearchPage;
