import { Route } from "react-router-dom";
import { handleChangeDuration } from "../../../utils/constants";
import saveIcon from "../../../images/like-icon.svg";
import savedIcon from "../../../images/liked-icon.svg";
import deleteIcon from "../../../images/delete-icon.svg";

function MoviesCard({ movie, onSaveMovie, onDeleteMovie, savedMovies }) {
  const savedMovie = savedMovies.find((m) => m.movieId === movie.id);

  function submitMovie() {
    if (!savedMovie) {
      onSaveMovie(movie);
    } else {
      onDeleteMovie(savedMovie);
    }
  }

  function handleDeleteMovie() {
    onDeleteMovie(movie);
  }

  return (
    <li className="movie">
      <Route path="/movies">
        <a href={movie.trailerLink} target="blank">
          <img
            className="movie__image"
            src={`https://api.nomoreparties.co${movie.image.url}`}
            alt="изображение фильма"
          />
        </a>
      </Route>
      <Route path="/saved-movies">
        <a href={movie.trailerLink} target="blank">
          <img
            className="movie__image"
            src={movie.image}
            alt="изображение фильма"
          />
        </a>
      </Route>
      <div className="movie__wrapper">
        <h2 className="movie__title">{movie.nameRU}</h2>
        <Route path="/movies">
          <img
            alt="Поставить-убрать лайк"
            className="movie__like-button"
            onClick={submitMovie}
            src={!savedMovie ? saveIcon : savedIcon}
          />
        </Route>
        <Route path="/saved-movies">
          <img
            alt="Удалить фильм"
            className="movie__delete-button"
            src={deleteIcon}
            onClick={handleDeleteMovie}
          />
        </Route>
      </div>
      <p className="movie__duration">
        {handleChangeDuration(movie.duration, movie)}
      </p>
    </li>
  );
}

export default MoviesCard;
