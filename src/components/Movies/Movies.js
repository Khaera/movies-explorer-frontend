import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCard from "./MoviesCard/MoviesCard";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";

function Movies() {
  return (
    <>
      <Header />
      <section className="movies">
        <SearchForm />
        <MoviesCardList>
          <MoviesCard title={"33 слова о дизайне"} duration={"1ч42м"} />
          <MoviesCard title={"33 слова о дизайне"} duration={"1ч42м"} />
          <MoviesCard title={"33 слова о дизайне"} duration={"1ч42м"} />
          <MoviesCard title={"33 слова о дизайне"} duration={"1ч42м"} />
          <MoviesCard title={"33 слова о дизайне"} duration={"1ч42м"} />
          <MoviesCard title={"33 слова о дизайне"} duration={"1ч42м"} />
          <MoviesCard title={"33 слова о дизайне"} duration={"1ч42м"} />
          <MoviesCard title={"33 слова о дизайне"} duration={"1ч42м"} />
          <MoviesCard title={"33 слова о дизайне"} duration={"1ч42м"} />
          <MoviesCard title={"33 слова о дизайне"} duration={"1ч42м"} />
          <MoviesCard title={"33 слова о дизайне"} duration={"1ч42м"} />
          <MoviesCard title={"33 слова о дизайне"} duration={"1ч42м"} />
          <MoviesCard title={"33 слова о дизайне"} duration={"1ч42м"} />
          <MoviesCard title={"33 слова о дизайне"} duration={"1ч42м"} />
          <MoviesCard title={"33 слова о дизайне"} duration={"1ч42м"} />
          <MoviesCard title={"33 слова о дизайне"} duration={"1ч42м"} />
        </MoviesCardList>
      </section>
      <Footer />
    </>
  );
}

export default Movies;
