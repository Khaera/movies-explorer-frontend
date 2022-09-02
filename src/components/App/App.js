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

function App() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  function toggleBurgerMenuClick() {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/movies">
          <Movies
            onBurgerClick={toggleBurgerMenuClick}
            isOpen={isBurgerMenuOpen}
          />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies
            onBurgerClick={toggleBurgerMenuClick}
            isOpen={isBurgerMenuOpen}
          />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/profile">
          <Profile
            onBurgerClick={toggleBurgerMenuClick}
            isOpen={isBurgerMenuOpen}
          />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
