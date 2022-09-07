import { Route } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({
  children,
  onSaveMovie,
  savedMovies,
  onDeleteMovie,
  movies
}) {
  return (
    <div className="movies-list__wrapper">
      <ul className="movies-list">{children}</ul>
      <Route path="/movies">
        <button className="movies-list__button" type="button">
          Ещё
        </button>
      </Route>
      <Route path="/saved-movies">
        <div className="movies-list__saved-devider"></div>
      </Route>
    </div>
  );
}

export default MoviesCardList;
