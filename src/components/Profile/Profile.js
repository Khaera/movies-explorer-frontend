import { Link } from "react-router-dom";
import Header from "../Header/Header";

function Profile() {
  return (
    <>
      <Header />
      <section className="profile">
        <h2 className="profile__title">Привет, Антон!</h2>
        <div className="profile__container">
          <div className="profile__info-container">
            <span>Имя</span>
            <p>Антон</p>
          </div>
          <div className="profile__info-container">
            <span>E-mail</span>
            <p>email@ya.ru</p>
          </div>
          <button className="profile__edit-button" type="button">
            Редактировать
          </button>
          <Link to="/" className="profile__signout">
            Выйти из аккаунта
          </Link>
        </div>
      </section>
    </>
  );
}

export default Profile;
