import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import MoviesCard from "../Movies/MoviesCard/MoviesCard";

function SavedMovies() {
  return (
    <>
      <section className="saved-movies">
        <SearchForm />
        <MoviesCardList>
          <MoviesCard title={"33 слова о дизайне"} duration={"1ч42м"} />
          <MoviesCard title={"33 слова о дизайне"} duration={"1ч42м"} />
        </MoviesCardList>
      </section>
    </>
  );
}

export default SavedMovies;
