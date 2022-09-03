import "./App.css";
import Main from "../Main/Main";
import { Route, Switch } from "react-router-dom";
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

function App() {
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: ""
  });

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  function handleUpdateUser({ name, email }) {
    mainApi
      .editUserInfo({ name, email })
      .then((newData) => {
        setCurrentUser(newData);
      })
      .catch((err) => console.log(err));
  }

  function toggleBurgerMenuClick() {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }

  function handleSavedMovie(movie) {
    mainApi
      .createMovie(movie)
      .then((newMovie) => {
        setSavedMovies([...savedMovies, newMovie]);
        console.log(savedMovies);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    Promise.all([mainApi.getSavedMovies()])
      .then(([initialSaveMovies]) => {
        setSavedMovies(initialSaveMovies);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    Promise.all([moviesApi.getMovies()])
      .then(([initialMovies]) => {
        setMovies(initialMovies);
      })
      .catch((err) => console.log(err));
  }, []);

  const headerEndpoints = ["/movies", "/saved-movies", "/profile", "/"];
  const footerEndpoints = ["/movies", "/saved-movies", "/"];

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Route exact path={headerEndpoints}>
          <Header
            onBurgerClick={toggleBurgerMenuClick}
            isOpen={isBurgerMenuOpen}
          />
        </Route>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/movies">
            <Movies movies={movies} saveMovie={handleSavedMovie} />
          </Route>
          <Route path="/saved-movies">
            <SavedMovies movies={movies} savedMovies={savedMovies} />
          </Route>
          <Route path="/signup">
            <Register />
          </Route>
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        <Route exact path={footerEndpoints}>
          <Footer />
        </Route>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
