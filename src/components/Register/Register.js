import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="register">
      <p className="register__icon"></p>
      <h3 className="register__title">Добро пожаловать!</h3>
      <form name="register" className="register__form">
        <label className="register__field">
          <span className="register__caption">Имя</span>
          <input
            className="register__input"
            name="name"
            required
            minLength="2"
            maxLength="30"
          />
        </label>
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
        <button className="register__submit-button" type="submit">
          Зарегистрироваться
        </button>
      </form>
      <div className="register__signin">
        <p>Уже зарегистрированы?</p>
        <Link to="/signin" className="register__login-link">
          Войти
        </Link>
      </div>
    </section>
  );
}

export default Register;
