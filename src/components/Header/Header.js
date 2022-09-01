import { Link, Route } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import NavTab from "../Main/NavTab/NavTab";
import Navigation from "../Navigation/Navigation";

function Header({ isOpen, onBurgerClick }) {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <p className="header__nav-logo"></p>
        </Link>
        <Route exact path="/">
          <NavTab />
        </Route>
        <Route path="/movies">
          <BurgerMenu isOpen={isOpen} />
          <Navigation onBurgerClick={onBurgerClick} isOpen={isOpen} />
        </Route>
        <Route path="/saved-movies">
          <BurgerMenu isOpen={isOpen} />
          <Navigation onBurgerClick={onBurgerClick} isOpen={isOpen} />
        </Route>
        <Route path="/profile">
          <BurgerMenu isOpen={isOpen} />
          <Navigation onBurgerClick={onBurgerClick} isOpen={isOpen} />
        </Route>
      </div>
    </header>
  );
}

export default Header;
