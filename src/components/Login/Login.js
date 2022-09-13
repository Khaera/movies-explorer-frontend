import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Login({ onLogin, isLoading }) {
  const [formValues, setFormValues] = useState({
    email: {
      value: "",
      isValid: false,
      errorMessage: ""
    },
    password: {
      value: "",
      isValid: false,
      errorMessage: ""
    }
  });

  const [disabled, setDisabled] = useState(false);

  const isValid = formValues.email.isValid && formValues.password.isValid;

  function handleChange(e) {
    // деструктуризируем свойство target, получая значения инпутов и ошибки
    const { name, value, validity, validationMessage } = e.target;
    // устанавливаем новое состояние, обязательно совмещая с предыдущим
    // чтобы значения других инпутов не перезаписались на undefined
    setFormValues((prevState) => ({
      ...prevState,
      [name]: {
        ...formValues[name],
        value,
        isValid: validity.valid,
        errorMessage: validationMessage
      }
    }));
  }

  useEffect(() => {
    isLoading ? setDisabled(true) : setDisabled(false);
  }, [isLoading]);

  useEffect(() => {
    isValid ? setDisabled(false) : setDisabled(true);
  }, [isValid]);

  function handleSubmit(e) {
    e.preventDefault();
    onLogin({
      email: formValues.email.value,
      password: formValues.password.value
    });
  }
  return (
    <section className="register">
      <Link to="/">
        <p className="register__icon"></p>
      </Link>
      <h3 className="register__title">Рады видеть!</h3>
      <form name="register" className="register__form" onSubmit={handleSubmit}>
        <label className="register__field">
          <span className="register__caption">E-mail</span>
          <input
            className={`register__input ${
              formValues.email.errorMessage && "register__input-error"
            }`}
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            value={formValues.email.value || ""}
            onChange={handleChange}
            type="email"
            required
            placeholder="Введите email"
          />
        </label>
        <span className="register__error-span">
          {formValues.email.errorMessage}
        </span>
        <label className="register__field">
          <span className="register__caption">Пароль</span>
          <input
            className={`register__input ${
              formValues.password.errorMessage && "register__input-error"
            }`}
            name="password"
            value={formValues.password.value || ""}
            onChange={handleChange}
            type="password"
            required
            placeholder="Введите пароль"
          />
        </label>
        <span className="register__error-span">
          {formValues.password.errorMessage}
        </span>
        <button
          className={`register__submit-button login__submit-button ${
            isValid && !isLoading ? "" : "register__submit-button-disabled"
          }`}
          type="submit"
          disabled={disabled}
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
