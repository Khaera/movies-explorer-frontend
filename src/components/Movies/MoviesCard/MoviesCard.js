import { Route } from "react-router-dom";
import { handleChangeDuration } from "../../../utils/constants";

function MoviesCard({ movie, onSaveMovie, onDeleteMovie, savedMovies }) {
  const savedMovie = savedMovies.find((m) => m.movieId === movie.id);

  function handleSaveMovie() {
    if (!savedMovie) {
      onSaveMovie({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN
      });
    } else {
      onDeleteMovie(savedMovies.filter((m) => m.movieId === movie.id)[0]);
    }
  }

  function handleDeleteMovie() {
    onDeleteMovie(movie);
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
            onClick={handleSaveMovie}
          />
        </Route>
        <Route path="/saved-movies">
          <button
            className="movie__delete-button"
            type="button"
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
