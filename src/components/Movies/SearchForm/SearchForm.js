import { useState } from "react";
import Filter from "../Filter/Filter";

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) {
      console.log("Введите ключевое слово");
    }
    onSearch(query);
    localStorage.setItem("searchQuery", query);
  }

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <div className="search">
      <form
        name="search-movie"
        className="search__container"
        onSubmit={handleSubmit}
      >
        <input
          className="search__input"
          placeholder="Фильм"
          required
          name="query"
          value={query || localStorage.getItem("searchQuery")}
          onChange={handleChange}
        ></input>
        <button type="submit" className="search__button"></button>
      </form>
      <Filter />
    </div>
  );
}

export default SearchForm;
