import axios from "axios";
import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearchResults }) => {
  const [search, setSearch] = useState("");

  const fetchSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}`
      );
      onSearchResults(response.data.items);
    } catch (error) {
      console.warn("Error in fetching Google data in SearchBar :", error);
    }
  };

  return (
    <form onSubmit={fetchSearch}>
      <div className="flex-item">
        <label className="flex-item">Search for Books</label>
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SearchBar;
