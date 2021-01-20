import React from "react";

const Search = ({ search, setSearch }) => {
  return (
    <div className="header">
      <div>
        <h1>Emoji Search</h1>
      </div>
      <div>
        <input
          placeholder="What emoji are you looking for ?"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        ></input>
      </div>
    </div>
  );
};

export default Search;
