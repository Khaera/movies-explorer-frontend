import { Link } from "react-router-dom";
import burgerButton from "../../images/burger-button.svg";
import closeButton from "../../images/close-button.svg";

function Navigation({ onBurgerClick, isOpen }) {
  return (
    <>
      <nav className="navigation">
        <div className="navigation__films">
          <Link to="/movies" className="navigation__film-link">
            Фильмы
          </Link>
          <Link to="/saved-movies" className="navigation__film-link">
            Сохранённые фильмы
          </Link>
        </div>
        <div className="navigation__account">
          <Link to="/profile" className="navigation__account-link">
            Аккаунт
          </Link>
          <p className="navigation__account-image"></p>
        </div>
      </nav>
      <img
        alt="кнопка бургерного меню"
        className="navigation__burger-button"
        src={isOpen ? closeButton : burgerButton}
        onClick={onBurgerClick}
      />
    </>
  );
}

export default Navigation;
