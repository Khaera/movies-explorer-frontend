import "./App.css";
import Main from "../Main/Main";
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation
} from "react-router-dom";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import PageNotFound from "../PageNotFound/PageNotFound";
import Preloader from "../Preloader/Preloader";
import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import mainApi from "../../utils/MainApi";
import { useEffect } from "react";
import moviesApi from "../../utils/MoviesApi";
import * as auth from "../../utils/auth";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const history = useHistory();
  const location = useLocation();

  const [checkboxStatus, setCheckboxStatus] = useState(true);

  const headerEndpoints = ["/movies", "/saved-movies", "/profile", "/"];
  const footerEndpoints = ["/movies", "/saved-movies", "/"];

  const [isTooltipPopupOpen, setIsTooltipPopupOpen] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const [loggedIn, setLoggedIn] = useState(false);
  const [success, setSuccess] = useState(false);
  const [popupText, setPopupText] = useState("");
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    _id: ""
  });

  const [foundMovies, setFoundMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [savedMoviesCopy, setSavedMoviesCopy] = useState([]);
  const [foundSavedMovies, setFoundSavedMovies] = useState("");

  const [disabledCheckbox, setDisabledCheckbox] = useState(true);
  const [disabledCheckboxSaved, setDisabledCheckboxSaved] = useState(true);

  const [preloaderStatus, setPreloaderStatus] = useState(false);
  useEffect(() => {
    tokenCheck();
  }, []);

  //блокировка чекбокса если нет найденных фильмов
  useEffect(() => {
    foundMovies.length !== 0
      ? setDisabledCheckbox(false)
      : setDisabledCheckbox(true);
  }, [foundMovies]);

  //блокировка чекбокса если нет сохраненных фильмов
  useEffect(() => {
    savedMovies.length !== 0
      ? setDisabledCheckboxSaved(false)
      : setDisabledCheckboxSaved(true);
  }, [savedMovies]);

  useEffect(() => {
    if (loggedIn) {
      getSavedMovies();
    }
  }, [loggedIn]);

  function getSavedMovies() {
    mainApi
      .getSavedMovies()
      .then((data) => {
        setSavedMovies(data);
        setSavedMoviesCopy(data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("searchedMovies"))) {
      setFoundMovies(JSON.parse(localStorage.getItem("searchedMovies")));
    }
  }, []);

  function tokenCheck() {
    const currentPath = location.pathname;
    if (localStorage.getItem("jwt")) {
      mainApi
        .getUserInfo()
        .then((response) => {
          if (response) {
            setCurrentUser({
              name: response.name,
              email: response.email,
              _id: response._id
            });
            setLoggedIn(true);
            history.push(currentPath);
          }
        })
        .catch((err) => {
          setIsTooltipPopupOpen(true);
          setSuccess(false);
          setPopupText(`Ошибка: ${err}`);
        });
    }
  }

  function closePopup() {
    setIsTooltipPopupOpen(false);
  }

  function toggleBurgerMenuClick() {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }

  function handleSearchMovie(movie, checked) {
    setPreloaderStatus(true);
    moviesApi
      .getMovies()
      .then((moviesFromSearch) => {
        const searchMovies = moviesFromSearch.filter((item) =>
          item.nameRU.toLowerCase().includes(movie.toLowerCase())
        );
        if (searchMovies.length === 0) {
          setIsTooltipPopupOpen(true);
          setPopupText("По вашему запросу ничего не найдено.");
          setSuccess(false);
        } else {
          setCheckboxStatus(false);
          localStorage.setItem("movieName", movie);
          localStorage.setItem("searchedMovies", JSON.stringify(searchMovies));
          localStorage.setItem("checkboxStatus", JSON.stringify(checked));
          setFoundMovies(searchMovies);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setPreloaderStatus(false));
  }

  function handleSearchSavedMovie(query, checkbox) {
    setPreloaderStatus(true);
    const searchMovies = savedMovies.filter((item) =>
      item.nameRU.toLowerCase().includes(query.toLowerCase())
    );
    if (searchMovies.length === 0) {
      setIsTooltipPopupOpen(true);
      setPopupText("По вашему запросу ничего не найдено.");
      setSuccess(false);
      setPreloaderStatus(false);
    } else {
      setCheckboxStatus(false);
      localStorage.setItem("savedMovieName", query);
      localStorage.setItem("searchedSavedMovies", JSON.stringify(searchMovies));
      localStorage.setItem("checkboxStatus", JSON.stringify(checkbox));
      setFoundSavedMovies(searchMovies);
      setPreloaderStatus(false);
    }
  }

  function handleSubmitCheckbox(checkbox) {
    let filteredMovies;
    let movies = JSON.parse(localStorage.getItem("searchedMovies"));
    if (checkbox) {
      filteredMovies = movies.filter((item) => item.duration <= 40);
    } else if (!checkbox) {
      filteredMovies = movies;
    }
    setFoundMovies(filteredMovies);
    localStorage.setItem("checkboxStatus", JSON.stringify(checkbox));
  }

  function handleSavedMoviesSubmitCheckbox(checkbox) {
    if (checkbox) {
      setSavedMovies(savedMovies.filter((item) => item.duration <= 40));
    } else if (!checkbox) {
      setSavedMovies(savedMoviesCopy);
    }
    localStorage.setItem("checkboxStatusSavedMovies", JSON.stringify(checkbox));
  }

  function handleDeleteMovie(movie) {
    mainApi
      .deleteMovie(movie._id)
      .then(() => {
        const updateSavedMovies = savedMovies.filter(
          (item) => item._id !== movie._id
        );
        setSavedMovies(updateSavedMovies);
        setSavedMoviesCopy(
          savedMoviesCopy.filter((item) => item._id !== movie._id)
        );
      })
      .catch((err) => console.log(err));
  }

  function handleSaveMovie(movie) {
    mainApi
      .createMovie(movie)
      .then((res) => {
        setSavedMovies(savedMovies.concat(res));
        setSavedMoviesCopy(savedMoviesCopy.concat(res));
      })
      .catch((err) => console.log(err));
  }

  function handleUpdateUser({ name, email }) {
    mainApi
      .editUserInfo({ name, email })
      .then((newData) => {
        setCurrentUser({
          name: newData.name,
          email: newData.email
        });
      })
      .catch((err) => console.log(err));
  }

  function handleRegister({ name, email, password }) {
    auth
      .createUser({ name, email, password })
      .then(() => {
        handleLogin({ email, password });
      })
      .catch(() => {
        setSuccess(false);
        setPopupText("Что-то пошло не так. Попробуйте ещё раз!");
        setIsTooltipPopupOpen(true);
      });
  }

  function handleLogin({ email, password }) {
    auth
      .authorize({ email, password })
      .then((data) => {
        if (!data) {
          return console.log("Что-то пошло не так!");
        }

        if (data.token) {
          localStorage.setItem("jwt", data.token);
          setLoggedIn(true);
          history.push("/movies");
        }
      })
      .catch(() => {
        setSuccess(false);
        setPopupText("Неверный логин или пароль.");
        setIsTooltipPopupOpen(true);
      });
  }

  function handleSignout() {
    localStorage.clear();
    setLoggedIn(false);
    setFoundMovies([]);
    setCurrentUser({ name: "", email: "", _id: "" });
    history.push("/");
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Route exact path={headerEndpoints}>
          <Header
            onBurgerClick={toggleBurgerMenuClick}
            isOpen={isBurgerMenuOpen}
            loggedIn={loggedIn}
          />
        </Route>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <ProtectedRoute
            path="/movies"
            component={Movies}
            onSearch={handleSearchMovie}
            foundMovies={foundMovies}
            savedMovies={savedMovies}
            onSaveMovie={handleSaveMovie}
            onDeleteMovie={handleDeleteMovie}
            loggedIn={loggedIn}
            submitCheckbox={handleSubmitCheckbox}
            disabled={checkboxStatus}
            onSubmitCheckbox={handleSubmitCheckbox}
            disabledCheckbox={disabledCheckbox}
            preloaderStatus={preloaderStatus}
          />
          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            onSearch={handleSearchSavedMovie}
            savedMovies={savedMovies}
            foundSavedMovies={foundSavedMovies}
            onSubmitCheckbox={handleSavedMoviesSubmitCheckbox}
            disabled={checkboxStatus}
            onDeleteMovie={handleDeleteMovie}
            onSaveMovie={handleSaveMovie}
            loggedIn={loggedIn}
            disabledCheckboxSaved={disabledCheckboxSaved}
            preloaderStatus={preloaderStatus}
          />
          <Route path="/signup">
            {loggedIn ? (
              <Redirect to="/" />
            ) : (
              <Register onRegister={handleRegister} />
            )}
          </Route>
          <Route path="/signin">
            {loggedIn ? (
              <Redirect to="/" />
            ) : (
              <Login onLogin={handleLogin} history={history} />
            )}
          </Route>
          <ProtectedRoute
            path="/profile"
            component={Profile}
            onSignout={handleSignout}
            loggedIn={loggedIn}
            onUpdateUser={handleUpdateUser}
          />
          <Route path="*" component={PageNotFound} history={history} />
        </Switch>
        <Route exact path={footerEndpoints} component={Footer} />
        <InfoTooltip
          isOpen={isTooltipPopupOpen}
          onClose={closePopup}
          success={success}
          text={popupText}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
