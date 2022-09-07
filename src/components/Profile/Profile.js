import { useContext } from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({ onSignout }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <>
      <section className="profile">
        <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
        <div className="profile__container">
          <div className="profile__info-container">
            <span>Имя</span>
            <p>{currentUser.name}</p>
          </div>
          <div className="profile__info-container">
            <span>E-mail</span>
            <p>{currentUser.email}</p>
          </div>
          <button className="profile__edit-button" type="button">
            Редактировать
          </button>
          <Link to="/" className="profile__signout" onClick={onSignout}>
            Выйти из аккаунта
          </Link>
        </div>
      </section>
    </>
  );
}

export default Profile;
