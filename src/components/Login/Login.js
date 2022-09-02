import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="register">
      <Link to="/">
        <p className="register__icon"></p>
      </Link>
      <h3 className="register__title">Рады видеть!</h3>
      <form name="register" className="register__form">
        <label className="register__field">
          <span className="register__caption">E-mail</span>
          <input
            className="register__input"
            name="name"
            type="email"
            required
          />
        </label>
        <label className="register__field">
          <span className="register__caption">Пароль</span>
          <input
            className="register__input"
            name="password"
            type="password"
            required
          />
        </label>
        <button
          className="register__submit-button login__submit-button"
          type="submit"
        >
          Войти
        </button>
      </form>
      <div className="register__signin">
        <p>Ещё не зарегистрированы?</p>
        <Link to="/signup" className="register__login-link">
          Регистрация
        </Link>
      </div>
    </section>
  );
}

export default Login;
