import Film from "../Film/Film";
import Button from "../../Button/Button";

export default function Films({ history }) {
  return (
    <section className="films">
      <div className="films__container">
        <Film />
        <Film />
        <Film />
        <Film />
        <Film />
      </div>
      <Button className="button button_place_films button_theme_grey" name={'Ещё'} />
    </section>
  )
}
