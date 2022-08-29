import { Route } from "react-router-dom";
import NavTab from "../Main/NavTab/NavTab";
import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <p className="header__nav-logo"></p>
        <Route exact path="/">
          <NavTab />
        </Route>
        <Route path="/movies">
          <Navigation />
        </Route>
        <Route path="/saved-movies">
          <Navigation />
        </Route>
      </div>
    </header>
  );
}

export default Header;
