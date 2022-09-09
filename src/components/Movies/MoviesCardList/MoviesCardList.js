/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Route, useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({
  foundMovies,
  onSaveMovie,
  savedMovies,
  onDeleteMovie
}) {
  const [maxEl, setMaxEl] = useState(12);
  const [renderedMovies, setRenderedMovies] = useState([]);
  const [width, setWidth] = useState(1280);
  const location = useLocation();

  //начальное кол-во фильмов
  function setDefaultMovies(count) {
    setMaxEl(count);
    let movies = [];
    foundMovies.forEach((item, i) => {
      if (i < count) {
        movies.push(item);
      }
    });
    setRenderedMovies(movies);
  }

  useEffect(() => {
    if (width < 767) {
      setDefaultMovies(5);
    } else if (width < 1025) {
      setDefaultMovies(6);
    } else if (width < 1280) {
      setDefaultMovies(9);
    } else {
      setDefaultMovies(12);
    }
    if (location.pathname === "/saved-movies") {
      setMaxEl(120);
    }
  }, [foundMovies, width, location]);

  useEffect(() => {
    setMovies();
  }, [maxEl]);

  //отслеживает разрешение экрана
  useEffect(() => {
    onSubscribe();
    return () => offSubscribe;
  }, []);

  function handleSubscribe() {
    setWidth(window.innerWidth);
  }

  function onSubscribe() {
    window.addEventListener("resize", function () {
      setTimeout(handleSubscribe, 1000);
    });
  }

  function offSubscribe() {
    window.removeEventListener("resize", function () {
      setTimeout(handleSubscribe, 1000);
    });
  }

  function setMovies() {
    let movies = [];
    foundMovies.forEach((item, i) => {
      if (i < maxEl) {
        movies.push(item);
      }
    });
    setRenderedMovies(movies);
  }

  function handleAddButtonClick() {
    if (width < 768) {
      setMaxEl(maxEl + 5);
    } else if (width < 1025) {
      setMaxEl(maxEl + 2);
    } else if (width < 1280) {
      setMaxEl(maxEl + 3);
    } else {
      setMaxEl(maxEl + 4);
    }
  }

  return (
    <div className="movies-list__wrapper">
      <ul className="movies-list">
        {renderedMovies.map((item) => (
          <MoviesCard
            key={item.id || item._id}
            movie={item}
            onSaveMovie={onSaveMovie}
            savedMovies={savedMovies}
            onDeleteMovie={onDeleteMovie}
          />
        ))}
      </ul>
      {foundMovies.length !== renderedMovies.length ? (
        <Route path="/movies">
          <button
            className="movies-list__button"
            type="button"
            onClick={handleAddButtonClick}
          >
            Ещё
          </button>
        </Route>
      ) : (
        ""
      )}
      <Route path="/saved-movies">
        <div className="movies-list__saved-devider"></div>
      </Route>
    </div>
  );
}

export default MoviesCardList;
