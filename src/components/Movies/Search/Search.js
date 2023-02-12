import Button from "../../Button/Button";
import { Input } from "../../Input/Input";
import { useEffect, useState } from "react";

export default function Search({ onSearch, onClear, movies, savedMovies, history, foundedMovies }) {

  const [searchQuery, setSearchQuery] = useState('');
  const [isShorts, setIsShorts] = useState(false);

  function handleSearch(e) {
    e.preventDefault();
    // if (searchQuery === '') {
    //   onClear();
    // } else if (history.location.pathname === '/movies') {
    //   onSearch(movies, searchQuery, isShorts, true)
    // } else {
    //   onSearch(savedMovies, searchQuery, isShorts, false)
    // }
    if (searchQuery === "" && !isShorts) {
      onClear();
    } else {
      onSearch(movies, searchQuery, isShorts, true);
    }
  }

  useEffect(() => {
    if (foundedMovies) {
      setSearchQuery(foundedMovies.query);
      setIsShorts(foundedMovies.isShorts);
    }
  }, [])

  // useEffect(() => {
  //   if (history.location.pathname === '/saved-movies') {
  //     setSearchQuery('');
  //     setIsShorts(false);
  //     onClear();
  //   } else if (localFilms) {
  //     setIsShorts(localFilms.isShorts);
  //     setSearchQuery(localFilms.query);
  //   }
  // }, [history.location.pathname]);

  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSearch}>
        <fieldset className="search__input-container">
          <Input
            className="input input_type_search"
            placeholder="Фильм"
            value={searchQuery}
            onChange={(e) => {setSearchQuery(e.target.value)}}
          />
          <Button className={"button button_icon_search"} />
        </fieldset>

        <div className="search__toggle">
          <input
            type="checkbox"
            className="input input_type_shorts input_view_hidden search__toggle_checkbox"
            id="input_type_shorts"
            checked={isShorts}
            value={isShorts}
            onChange={(e) => {setIsShorts(!isShorts)}}
          />
          <label htmlFor="input_type_shorts" className="search__fake-toggle"></label>
          <span className="search__toggle_text">Короткометражки</span>
        </div>
      </form>
    </section>
  )
}
