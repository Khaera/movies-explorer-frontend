import { Route } from "react-router-dom";
import movieImage from "../../../images/movie.png";

function MoviesCard({ title, duration }) {
  return (
    <li className="movie">
      <img className="movie__image" src={movieImage} alt="изображение фильма" />
      <div className="movie__wrapper">
        <h2 className="movie__title">{title}</h2>
        <Route path="/movies">
          <button className="movie__like-button" type="button" />
        </Route>
        <Route path="/saved-movies">
          <button className="movie__delete-button" type="button" />
        </Route>
      </div>
      <p className="movie__duration">{duration}</p>
    </li>
  );
}

export default MoviesCard;
