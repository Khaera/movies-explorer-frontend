function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__caption caption">Студент</h2>
      <div className="about-me__wrapper">
        <h3 className="about-me__name title">Антон</h3>
        <p className="about-me__avatar"></p>
      </div>
      <h4 className="about-me__job">Фронтенд-разработчик, 23 года</h4>
      <p className="about-me__description description">
        Я родом из города Санкт-Петербург. Закончил Санкт-Петербургский техникум
        ЖД транспорта. Сейчас работаю машинистом в метро. Учусь в ВУЗе на
        факультете информатики заочно. Увлекаюсь спортом, татуировками. Люблю
        слушать музыку, читать литературу и кодить. Есть 2 кота.
      </p>

      <a href="_blank" className="about-me__github-link">
        Github
      </a>
      <ul className="about-me__portfolio">
        Портфолио
        <li href="_blank" className="about-me__portfolio-item">
          <a href="_blank" className="about-me__portfolio-link">
            Статичный сайт
            <p className="about-me__portfolio-link-arrow"></p>
          </a>
        </li>
        <li href="_blank" className="about-me__portfolio-item">
          <a href="_blank" className="about-me__portfolio-link">
            Адаптивный сайт
            <p className="about-me__portfolio-link-arrow"></p>
          </a>
        </li>
        <li className="about-me__portfolio-item">
          <a href="_blank" className="about-me__portfolio-link">
            Одностраничное приложение
            <p className="about-me__portfolio-link-arrow"></p>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default AboutMe;
