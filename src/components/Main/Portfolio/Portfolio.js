function Portfolio() {
  return (
    <section className="portfolio">
      <ul className="portfolio__list">
        Портфолио
        <li href="_blank" className="portfolio-item">
          <a href="_blank" className="portfolio-link">
            Статичный сайт
            <p className="portfolio-link-arrow"></p>
          </a>
        </li>
        <li href="_blank" className="portfolio-item">
          <a href="_blank" className="portfolio-link">
            Адаптивный сайт
            <p className="portfolio-link-arrow"></p>
          </a>
        </li>
        <li className="portfolio-item">
          <a href="_blank" className="portfolio-link">
            Одностраничное приложение
            <p className="portfolio-link-arrow"></p>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
