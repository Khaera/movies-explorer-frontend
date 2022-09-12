import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function SavedMovies({
  onSearch,
  foundSavedMovies,
  savedMovies,
  onSaveMovie,
  onDeleteMovie,
  disabledCheckboxSaved,
  onSubmitCheckbox,
  preloaderStatus
}) {
  return (
    <>
      <section className="saved-movies">
        <SearchForm
          onSearch={onSearch}
          onSubmitCheckbox={onSubmitCheckbox}
          disabledSaved={disabledCheckboxSaved}
        />
        {preloaderStatus ? (
          <Preloader />
        ) : (
          <MoviesCardList
            foundMovies={
              foundSavedMovies.length === 0 ? savedMovies : foundSavedMovies
            }
            onSaveMovie={onSaveMovie}
            savedMovies={savedMovies}
            onDeleteMovie={onDeleteMovie}
          />
        )}
      </section>
    </>
  );
}

export default SavedMovies;
