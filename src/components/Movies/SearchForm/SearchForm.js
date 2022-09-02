import Filter from "../Filter/Filter";

function SearchForm() {
  return (
    <div className="search">
      <form name="search-movie" className="search__container">
        <input className="search__input" placeholder="Фильм" required></input>
        <button type="submit" className="search__button"></button>
      </form>
      <Filter />
    </div>
  );
}

export default SearchForm;
