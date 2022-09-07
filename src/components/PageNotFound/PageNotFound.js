import { Link } from "react-router-dom";

function PageNotFound({ history }) {
  return (
    <section className="not-found">
      <h2 className="not-found__code">404</h2>
      <p className="not-found__message">Страница не найдена</p>
      <Link onClick={history.goBack()} className="not-found__back">
        Назад
      </Link>
    </section>
  );
}

export default PageNotFound;
