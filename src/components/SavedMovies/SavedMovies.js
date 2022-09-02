import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import MoviesCard from "../Movies/MoviesCard/MoviesCard";

function SavedMovies({ onBurgerClick, isOpen }) {
  return (
    <>
      <Header onBurgerClick={onBurgerClick} isOpen={isOpen} />
      <section className="saved-movies">
        <SearchForm />
        <MoviesCardList>
          <MoviesCard title={"33 слова о дизайне"} duration={"1ч42м"} />
          <MoviesCard title={"33 слова о дизайне"} duration={"1ч42м"} />
        </MoviesCardList>
      </section>
      <Footer />
    </>
  );
}

export default SavedMovies;
