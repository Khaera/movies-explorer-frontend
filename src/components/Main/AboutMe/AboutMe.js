import avatar from "../../../images/anton-grigorash-avatar.jpg";

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__caption caption">Студент</h2>
      <div className="about-me__wrapper">
        <h3 className="about-me__name title">Антон</h3>
        <div className="about-me__avatar-wrapper">
          <img
            src={avatar}
            alt="моя фотография"
            className="about-me__avatar"
          ></img>
        </div>
      </div>
      <h4 className="about-me__job">Фронтенд-разработчик, 23 года</h4>
      <p className="about-me__description description">
        Я родом из города Санкт-Петербург. Закончил Санкт-Петербургский техникум
        ЖД транспорта. Сейчас работаю машинистом в метро. Учусь в ВУЗе на
        факультете информатики заочно. Увлекаюсь спортом, татуировками. Люблю
        слушать музыку, читать литературу и кодить. Есть 2 кота.
      </p>

      <a href="https://github.com/Khaera" className="about-me__github-link">
        Github
      </a>
    </section>
  );
}

export default AboutMe;
