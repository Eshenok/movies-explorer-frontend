import Button from "../Button/Button";

export default function NotFound({ history }) {
  return (
    <section className="notFound">
      <div className="notFound__container">
        <h2 className="notFound__title">404</h2>
        <p className="notFound__text">Страница не найдена</p>
      </div>
      <Button name={"Назад"} className="button button_theme_transparent-blue" onClick={history.goBack} />
    </section>
  )
}
