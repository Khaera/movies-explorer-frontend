import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import MoviesCard from "../Movies/MoviesCard/MoviesCard";

function SavedMovies({ savedMovies }) {
  return (
    <>
      <section className="saved-movies">
        <SearchForm />
        <MoviesCardList>
          {savedMovies.map((movie) => (
            <MoviesCard key={movie.id} movie={movie} />
          ))}
        </MoviesCardList>
      </section>
    </>
  );
}

export default SavedMovies;
