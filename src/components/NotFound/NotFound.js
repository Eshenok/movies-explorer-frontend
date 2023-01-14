import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="notFound">
      <div className="notFound__container">
        <h2 className="notFound__title">404</h2>
        <p className="notFound__text">Страница не найдена</p>
      </div>
      <Link className="notFound__link">Назад</Link>
    </section>
  )
}
