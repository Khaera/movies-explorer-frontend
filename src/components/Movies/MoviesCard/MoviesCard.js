import movieImage from "../../../images/movie.png";

function MoviesCard({ title, duration }) {
  return (
    <li className="movie">
      <img className="movie__image" src={movieImage} alt="изображение фильма" />
      <div className="movie__wrapper">
        <h2 className="movie__title">{title}</h2>
        <button className="movie__button" type="button" />
      </div>
      <p className="movie__duration">{duration}</p>
    </li>
  );
}

export default MoviesCard;
