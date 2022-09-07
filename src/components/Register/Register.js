import { useState } from "react";
import { Link } from "react-router-dom";

function Register({ onRegister }) {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const { name, email, password } = data;
    onRegister({ name, email, password });
  }

  return (
    <section className="register">
      <Link to="/" className="register__icon"></Link>
      <h3 className="register__title">Добро пожаловать!</h3>
      <form name="register" className="register__form" onSubmit={handleSubmit}>
        <label className="register__field">
          <span className="register__caption">Имя</span>
          <input
            className="register__input"
            name="name"
            onChange={handleChange}
            value={data.name || ""}
            required
            minLength="2"
            maxLength="30"
            placeholder="Введите имя"
          />
        </label>
        <label className="register__field">
          <span className="register__caption">E-mail</span>
          <input
            className="register__input"
            name="email"
            onChange={handleChange}
            value={data.email || ""}
            type="email"
            required
            placeholder="Введите E-mail"
          />
        </label>
        <label className="register__field">
          <span className="register__caption">Пароль</span>
          <input
            className="register__input"
            name="password"
            onChange={handleChange}
            value={data.password || ""}
            type="password"
            required
            placeholder="Введите пароль"
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
