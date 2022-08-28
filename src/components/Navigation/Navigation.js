function Navigation() {
  return (
    <nav className="navigation">
      <div className="navigation__films">
        <a href="_blank" className="navigation__film-link">
          Фильмы
        </a>
        <a href="_blank" className="navigation__film-link">
          Сохранённые фильмы
        </a>
      </div>
      <div className="navigation__account">
        <a href="_blank" className="navigation__account-link">
          Аккаунт
        </a>
        <p className="navigation__account-image"></p>
      </div>
    </nav>
  );
}

export default Navigation;
