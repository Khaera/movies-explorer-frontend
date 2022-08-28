import Filter from "../Filter/Filter";

function SearchForm() {
  return (
    <div className="search">
      <div className="search__container">
        <input className="search__input" placeholder="Фильм"></input>
        <button className="search__button"></button>
      </div>
      <Filter />
    </div>
  );
}

export default SearchForm;
