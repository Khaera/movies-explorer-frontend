import { Link, Route } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import NavTab from "../Main/NavTab/NavTab";
import Navigation from "../Navigation/Navigation";

function Header({ isOpen, onBurgerClick, loggedIn }) {
  const burgerEnpoints = ["/movies", "/saved-movies", "/profile", "/"];
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <p className="header__nav-logo"></p>
        </Link>
        <Route exact path={burgerEnpoints}>
          <BurgerMenu isOpen={isOpen} onBurgerClick={onBurgerClick} />
        </Route>
        <Route exact path="/">
          {loggedIn ? (
            <Navigation onBurgerClick={onBurgerClick} isOpen={isOpen} />
          ) : (
            <NavTab />
          )}
        </Route>
        <Route path="/movies">
          <Navigation onBurgerClick={onBurgerClick} isOpen={isOpen} />
        </Route>
        <Route path="/saved-movies">
          <Navigation onBurgerClick={onBurgerClick} isOpen={isOpen} />
        </Route>
        <Route path="/profile">
          <Navigation onBurgerClick={onBurgerClick} isOpen={isOpen} />
        </Route>
      </div>
    </header>
  );
}

export default Header;
