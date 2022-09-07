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

  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getSavedMovies()
        .then((data) => {
          const userMoviesList = data.filter(
            (m) => m.owner === currentUser._id
          );
          setSavedMovies(userMoviesList);
        })
        .catch((err) => console.log(err));
    }
  }, [currentUser, loggedIn]);

  useEffect(() => {
    tokenCheck();
  }, []);

  useEffect(() => {
    if (loggedIn) {
      setMovies(JSON.parse(localStorage.getItem("searchedMovies")));
    }
  }, [loggedIn]);

  function tokenCheck() {
    const currentPath = location.pathname;
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      auth
        .getContent(jwt)
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
        .catch((err) => console.log(`Что-то пошло не так. Ошибка: ${err}`));
    }
  }

  function closePopup() {
    setIsTooltipPopupOpen(false);
  }

  function toggleBurgerMenuClick() {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }

  function handleSearchMovie(query) {
    moviesApi
      .getMovies()
      .then((moviesFromSearch) => {
        const searchMovies = moviesFromSearch.filter((item) =>
          item.nameRU.toLowerCase().includes(query.toLowerCase())
        );
        setMovies(searchMovies);
        localStorage.setItem("searchedMovies", JSON.stringify(searchMovies));
      })
      .catch((err) => console.log(err));
  }

  function handleDeleteMovie(movie) {
    mainApi
      .deleteMovie(movie._id)
      .then(() => {
        const updateSavedMovies = savedMovies.filter(
          (m) => m._id !== movie._id
        );
        setSavedMovies(updateSavedMovies);
      })
      .catch((err) => console.log(err));
  }

  function handleSaveMovie(movie) {
    mainApi
      .createMovie(movie)
      .then((newMovie) => {
        setSavedMovies([...savedMovies, { ...newMovie, id: newMovie.movieId }]);
        console.log(savedMovies);
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
    setCurrentUser({ name: "", email: "" });
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
            searchedMovies={movies}
            movies={movies}
            savedMovies={savedMovies}
            onSaveMovie={handleSaveMovie}
            onDeleteMovie={handleDeleteMovie}
            loggedIn={loggedIn}
          />
          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            onSearch={handleSearchMovie}
            movies={savedMovies}
            savedMovies={savedMovies}
            onSaveMovie={handleSaveMovie}
            onDeleteMovie={handleDeleteMovie}
            loggedIn={loggedIn}
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
