import MoviesCard from "./MoviesCard/MoviesCard";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";

function Movies({
  movies,
  saveMovie,
  onSearch,
  onSaveMovie,
  savedMovies,
  onDeleteMovie,
  searchedMovies
}) {
  return (
    <>
      <section className="movies">
        <SearchForm onSearch={onSearch} />
        <MoviesCardList
          movies={movies}
          searchedMovies={searchedMovies}
          onSaveMovie={onSaveMovie}
          savedMovies={savedMovies}
          onDeleteMovie={onDeleteMovie}
        >
          {movies.map((item) => (
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

export default Movies;
