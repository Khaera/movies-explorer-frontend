function Header() {
  return (
    <header className="header">
      <p className="header__nav-logo"></p>
      <div className="header__buttons">
        <button className="header__register-button">Регистрация</button>
        <button className="header__login-button">Войти</button>
      </div>
    </header>
  );
}

export default Header;
