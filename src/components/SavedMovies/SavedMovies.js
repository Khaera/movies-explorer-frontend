import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import MoviesCard from "../Movies/MoviesCard/MoviesCard";

function SavedMovies({
  onSearch,
  onSaveMovie,
  movies,
  onDeleteMovie,
  savedMovies
}) {
  return (
    <>
      <section className="saved-movies">
        <SearchForm onSearch={onSearch} />
        <MoviesCardList
          onSaveMovie={onSaveMovie}
          movies={movies}
          onDeleteMovie={onDeleteMovie}
        >
          {savedMovies.map((item) => (
            <MoviesCard
              key={item._id || item.movieId}
              movie={item}
              onSaveMovie={onSaveMovie}
              savedMovies={savedMovies}
              onDeleteMovie={onDeleteMovie}
            />
          ))}
        </MoviesCardList>
      </section>
    </>
  );
}

export default SavedMovies;
