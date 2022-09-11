import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Register({ onRegister, isLoading }) {
  const [formValues, setFormValues] = useState({
    name: {
      value: "",
      isValid: false,
      errorMessage: ""
    },
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

  const isValid =
    formValues.name.isValid &&
    formValues.email.isValid &&
    formValues.password.isValid;

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
    isValid ? setDisabled(false) : setDisabled(true);
  }, [isValid]);

  function handleSubmit(e) {
    e.preventDefault();
    onRegister({
      name: formValues.name.value,
      email: formValues.email.value,
      password: formValues.password.value
    });
  }

  useEffect(() => {
    isLoading ? setDisabled(true) : setDisabled(false);
  }, [isLoading]);

  return (
    <section className="register">
      <Link to="/" className="register__icon"></Link>
      <h3 className="register__title">Добро пожаловать!</h3>
      <form name="register" className="register__form" onSubmit={handleSubmit}>
        <label className="register__field">
          <span className="register__caption">Имя</span>
          <input
            className={`register__input ${
              formValues.name.errorMessage && "register__input-error"
            }`}
            name="name"
            onChange={handleChange}
            value={formValues.name.value || ""}
            required
            minLength="2"
            maxLength="30"
            placeholder="Введите имя"
          />
        </label>
        <span className="register__error-span">
          {formValues.name.errorMessage}
        </span>
        <label className="register__field">
          <span className="register__caption">E-mail</span>
          <input
            className={`register__input ${
              formValues.email.errorMessage && "register__input-error"
            }`}
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            onChange={handleChange}
            value={formValues.email.value || ""}
            type="email"
            required
            placeholder="Введите E-mail"
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
            onChange={handleChange}
            value={formValues.password.value || ""}
            type="password"
            required
            placeholder="Введите пароль"
          />
        </label>
        <span className="register__error-span">
          {formValues.password.errorMessage}
        </span>
        <button
          className={`register__submit-button ${
            isValid && !isLoading ? "" : "register__submit-button-disabled"
          }`}
          type="submit"
          disabled={disabled}
        >
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
