import Button from "../../Button/Button";
import { Input } from "../../Input/Input";

export default function Search() {
  return (
    <section className="search">
      <form className="search__form">
        <fieldset className="search__input-container">
          <Input
            className="input input_type_search"
            placeholder="Фильм"
            required={true}
          />
          <Button className={"button button_icon_search"} />
        </fieldset>

        <div className="search__toggle">
          <Input
            type="checkbox"
            className="input input_type_shorts input_view_hidden search__toggle_checkbox"
            id="input_type_shorts"
          />
          <label htmlFor="input_type_shorts" className="search__fake-toggle"></label>
          <span className="search__toggle_text">Короткометражки</span>
        </div>
      </form>
    </section>
  )
}
