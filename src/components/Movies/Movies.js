import MoviesCard from "./MoviesCard/MoviesCard";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";

function Movies({ movies, saveMovie }) {
  return (
    <>
      <section className="movies">
        <SearchForm />
        <MoviesCardList>
          {movies.map((item) => (
            <MoviesCard key={item.id} movie={item} saveMovie={saveMovie} />
          ))}
        </MoviesCardList>
      </section>
    </>
  );
}

export default Movies;
