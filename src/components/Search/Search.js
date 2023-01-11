import Button from "../Button/Button";

export default function Search() {
  return (
    <section className="search">
      <form className="search__form">
        <div className="search__input-container">
          <input className="input search__input" placeholder="Фильм"/>
          <Button className={"button search__button"} />
        </div>

        <div className="search__toggle">
          <input type="checkbox" className="search__toggle_checkbox" id="search__toggle_checkbox" />
          <label for="search__toggle_checkbox" className="search__fake-toggle"></label>
          <span className="search__toggle_text">Короткометражки</span>
        </div>
      </form>
    </section>
  )
}
