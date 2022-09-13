import { NavLink } from "react-router-dom";

function BurgerMenu({ isOpen, onBurgerClick }) {
  return (
    <div className={`burger ${isOpen ? "burger_opened" : "burger_hidden"}`}>
      <button
        className="burger__close-button"
        type="button"
        onClick={onBurgerClick}
      ></button>
      <div className="burger__container">
        <NavLink
          exact
          to="/"
          activeClassName="burger__link_active"
          className="navigation__film-link burger__link"
          onClick={onBurgerClick} //для закрытия меню при переходе по ссылке
        >
          Главная
        </NavLink>
        <NavLink
          exact
          to="/movies"
          activeClassName="burger__link_active"
          className="navigation__film-link burger__link"
          onClick={onBurgerClick}
        >
          Фильмы
        </NavLink>
        <NavLink
          activeClassName="burger__link_active"
          exact
          to="/saved-movies"
          className="navigation__film-link burger__link"
          onClick={onBurgerClick}
        >
          Сохранённые фильмы
        </NavLink>
        <div className="navigation__account burger__account">
          <NavLink
            activeClassName="burger__link_active"
            exact
            to="/profile"
            className="navigation__account-link"
            onClick={onBurgerClick}
          >
            Аккаунт
          </NavLink>
          <p className="navigation__account-image"></p>
        </div>
      </div>
    </div>
  );
}

export default BurgerMenu;
