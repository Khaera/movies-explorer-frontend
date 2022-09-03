import MoviesCard from "./MoviesCard/MoviesCard";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";

function Movies() {
  return (
    <>
      <section className="movies">
        <SearchForm />
        <MoviesCardList>
          <MoviesCard title={"33 слова о дизайне"} duration={"1ч42м"} />
          <MoviesCard title={"33 слова о дизайне"} duration={"1ч42м"} />
          <MoviesCard title={"33 слова о дизайне"} duration={"1ч42м"} />
          <MoviesCard title={"33 слова о дизайне"} duration={"1ч42м"} />
          <MoviesCard title={"33 слова о дизайне"} duration={"1ч42м"} />
        </MoviesCardList>
      </section>
    </>
  );
}

export default Movies;
