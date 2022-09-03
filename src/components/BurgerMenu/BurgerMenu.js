import { Link } from "react-router-dom";

function BurgerMenu({ isOpen, onBurgerClick }) {
  return (
    <div className={`burger ${isOpen ? "burger_opened" : "burger_hidden"}`}>
      <button
        className="burger__close-button"
        type="button"
        onClick={onBurgerClick}
      ></button>
      <div className="burger__container">
        <Link to="/" className="navigation__film-link burger__link">
          Главная
        </Link>
        <Link to="/movies" className="navigation__film-link burger__link">
          Фильмы
        </Link>
        <Link to="/saved-movies" className="navigation__film-link burger__link">
          Сохранённые фильмы
        </Link>
        <div className="navigation__account burger__account">
          <Link to="/profile" className="navigation__account-link">
            Аккаунт
          </Link>
          <p className="navigation__account-image"></p>
        </div>
      </div>
    </div>
  );
}

export default BurgerMenu;
