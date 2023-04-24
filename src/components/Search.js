import React from "react";

function Search({searchFor, onSearchChange}) {
  function handleSearch(event) {
    onSearchChange(event.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searchFor} onChange={handleSearch}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
