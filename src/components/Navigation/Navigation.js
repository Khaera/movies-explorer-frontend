import { NavLink } from "react-router-dom";
import burgerButton from "../../images/burger-button.svg";

function Navigation({ onBurgerClick }) {
  return (
    <>
      <nav className="navigation">
        <div className="navigation__films">
          <NavLink
            activeClassName="navigation__film-link_active"
            exact
            to="/movies"
            className="navigation__film-link"
          >
            Фильмы
          </NavLink>
          <NavLink
            activeClassName="navigation__film-link_active"
            exact
            to="/saved-movies"
            className="navigation__film-link"
          >
            Сохранённые фильмы
          </NavLink>
        </div>
        <div className="navigation__account">
          <NavLink
            activeClassName="navigation__film-link_active"
            exact
            to="/profile"
            className="navigation__account-link"
          >
            Аккаунт
          </NavLink>
          <p className="navigation__account-image"></p>
        </div>
      </nav>
      <img
        alt="кнопка бургерного меню"
        className="navigation__burger-button"
        src={burgerButton}
        onClick={onBurgerClick}
      />
    </>
  );
}

export default Navigation;
