import axios from "axios";
import React, { useState, useEffect } from "react";

const SearchBar = ({ onSearchResults }) => {
  const [search, setSearch] = useState("");

  const fetchSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}`
      );
      onSearchResults(response.data.items);
      console.log("Google Api Data:", response);
    } catch (error) {
      console.warn("Error in fetching Google data in SearchBar :", error);
    }
  };

  return (
    <form onSubmit={fetchSearch}>
      <div>
        <label>Search for Books</label>
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SearchBar;
