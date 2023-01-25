import Film from "../Film/Film";
import Button from "../../Button/Button";

export default function Films({ movies, filmsQuantity, onMoreButton, onPutLike }) {
  return (
    <section className="films">
      <div className="films__container">
        {movies.map((movie, index) =>
          index < filmsQuantity && (
          <Film key={movie.id} name={movie.nameRU} url={movie.image.url} duration={movie.duration} info={movie} onPutLike={onPutLike}/>
        ))}
      </div>
      <Button className="button button_place_films button_theme_grey" name={'Ещё'} onClick={onMoreButton} />
    </section>
  )
}
