import Button from "../../Button/Button";
import { Input } from "../../Input/Input";
import { useState } from "react";

export default function Search({ onSearch, movies, savedMovies, history }) {

  const [searchQuery, setSearchQuery] = useState('');
  const [isShorts, setIsShorts] = useState(false);

  function handleSearch(e) {
    e.preventDefault();
    if (history.location.pathname === '/movies') {
      onSearch(movies, searchQuery, isShorts)
    } else {
      onSearch(savedMovies, searchQuery, isShorts)
    }
  }

  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSearch}>
        <fieldset className="search__input-container">
          <Input
            className="input input_type_search"
            placeholder="Фильм"
            required={true}
            value={searchQuery}
            onChange={(e) => {setSearchQuery(e.target.value)}}
          />
          <Button className={"button button_icon_search"} />
        </fieldset>

        <div className="search__toggle">
          <Input
            type="checkbox"
            className="input input_type_shorts input_view_hidden search__toggle_checkbox"
            id="input_type_shorts"
            value={isShorts}
            onChange={() => {setIsShorts(!isShorts)}}
          />
          <label htmlFor="input_type_shorts" className="search__fake-toggle"></label>
          <span className="search__toggle_text">Короткометражки</span>
        </div>
      </form>
    </section>
  )
}
