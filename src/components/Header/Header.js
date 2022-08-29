import { Link, Route } from "react-router-dom";
import NavTab from "../Main/NavTab/NavTab";
import Navigation from "../Navigation/Navigation";

function Header() {
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
          <Navigation />
        </Route>
        <Route path="/saved-movies">
          <Navigation />
        </Route>
        <Route path="/profile">
          <Navigation />
        </Route>
      </div>
    </header>
  );
}

export default Header;
