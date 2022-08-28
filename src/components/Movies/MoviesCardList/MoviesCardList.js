import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  return (
    <div className="movies-list__wrapper">
      <ul className="movies-list">
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
      </ul>
      <button className="movies-list__button" type="button">
        Ещё
      </button>
    </div>
  );
}

export default MoviesCardList;
