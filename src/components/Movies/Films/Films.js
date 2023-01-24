import Film from "../Film/Film";
import Button from "../../Button/Button";

export default function Films({ movies }) {
  return (
    <section className="films">
      <div className="films__container">
        {movies.map((movie) => (
          <Film key={movie.id} name={movie.nameRU} url={movie.image.url} duration={movie.duration}/>
        ))}
      </div>
      <Button className="button button_place_films button_theme_grey" name={'Ещё'} />
    </section>
  )
}
