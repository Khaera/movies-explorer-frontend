function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__items">
        <p className="footer__year">&copy; 2022</p>
        <div className="footer__links">
          <a href="_blank" className="footer__link">
            Яндекс.Практикум
          </a>
          <a href="_blank" className="footer__link">
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
