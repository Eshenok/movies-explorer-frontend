import Film from "../Film/Film";
import Button from "../../Button/Button";
import { Route } from "react-router-dom";

export default function Films({ movies, savedMovies, filmsQuantity, onMoreButton, onPutLike, onRemoveLike }) {
  return (
    <section className="films">
      <div className="films__container">
        <Route path="/movies">
          {movies.map((movie, index) =>
            index < filmsQuantity && (
              <Film
                key={movie.id}
                name={movie.nameRU}
                url={movie.image.url}
                duration={movie.duration}
                currentMovie={movie}
                onPutLike={onPutLike}
                savedMovies={savedMovies}
                onRemoveLike={onRemoveLike}
              />
            ))}
        </Route>
        <Route path="/saved-movies">
          {savedMovies.map((movie, index) =>
            index < filmsQuantity && (
              <Film
                key={movie.id}
                name={movie.nameRU}
                url={movie.image}
                duration={movie.duration}
                currentMovie={movie}
                savedMovies={savedMovies}
                onRemoveLike={onRemoveLike}
              />
            ))}
        </Route>
      </div>
      <Button className="button button_place_films button_theme_grey" name={'Ещё'} onClick={onMoreButton} />
    </section>
  )
}
