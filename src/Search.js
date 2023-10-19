import React from "react";

function Search({ setSearchTerm }) {
  return (
    <div className="search">
      Search Filter<input
        type="text"
        className="search-container"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default Search;
