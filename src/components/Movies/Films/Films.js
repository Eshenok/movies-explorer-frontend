import Film from "../Film/Film";
import Button from "../../Button/Button";

export default function Films({ movies, savedMovies, filmsQuantity, onMoreButton, onPutLike, onRemoveLike }) {
  return (
    <section className="films">
      <div className="films__container">
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
      </div>
      <Button className="button button_place_films button_theme_grey" name={'Ещё'} onClick={onMoreButton} />
    </section>
  )
}
