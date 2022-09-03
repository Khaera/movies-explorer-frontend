import { Route } from "react-router-dom";

function MoviesCard({ movie, saveMovie }) {
  function duration(duration) {
    if (duration < 60) {
      return `${movie.duration} мин`;
    }
    if (duration > 60 && duration < 120) {
      return `1 час ${movie.duration - 60} мин`;
    }

    if (duration > 120) {
      return `2 часа ${movie.duration - 120} мин`;
    }

    if (duration === 60) {
      return `1 час`;
    }
    if (duration === 120) {
      return `2 часа`;
    }
  }

  function saveMoviee() {
    saveMovie(movie);
    console.log(movie);
  }

  return (
    <li className="movie">
      <Route path="/movies">
        <img
          className="movie__image"
          src={`https://api.nomoreparties.co${movie.image.url}`}
          alt="изображение фильма"
        />
      </Route>
      <Route path="/saved-movies">
        <img
          className="movie__image"
          src={movie.image}
          alt="изображение фильма"
        />
      </Route>
      <div className="movie__wrapper">
        <h2 className="movie__title">{movie.nameRU}</h2>
        <Route path="/movies">
          <button
            className="movie__like-button"
            type="button"
            onClick={saveMoviee}
          />
        </Route>
        <Route path="/saved-movies">
          <button className="movie__delete-button" type="button" />
        </Route>
      </div>
      <p className="movie__duration">{duration(movie.duration)}</p>
    </li>
  );
}

export default MoviesCard;
