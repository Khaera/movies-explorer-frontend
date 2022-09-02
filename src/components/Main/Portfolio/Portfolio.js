function Portfolio() {
  return (
    <section className="portfolio">
      <ul className="portfolio__list">
        Портфолио
        <li className="portfolio-item">
          <a
            href="https://github.com/Khaera/how-to-learn"
            target="blank"
            className="portfolio-link"
          >
            Статичный сайт
            <p className="portfolio-link-arrow"></p>
          </a>
        </li>
        <li className="portfolio-item">
          <a
            target="blank"
            href="https://github.com/Khaera/russian-travel"
            className="portfolio-link"
          >
            Адаптивный сайт
            <p className="portfolio-link-arrow"></p>
          </a>
        </li>
        <li className="portfolio-item">
          <a
            href="https://github.com/Khaera/react-mesto-api-full"
            className="portfolio-link"
            target="blank"
          >
            Одностраничное приложение
            <p className="portfolio-link-arrow"></p>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
