import Button from "../../Button/Button";
import { useEffect, useState } from "react";
import { Route } from "react-router-dom";

export default function Film({ name, url, duration, currentMovie, onPutLike, savedMovies, onRemoveLike }) {

  const [isLiked, setIslIked] = useState(false);
  const likeClasses = ['button button_icon_like button_place_film'];

  useEffect(() => {
    savedMovies.forEach((movie) => {
      if (movie.movieId === currentMovie.id || movie.movieId === currentMovie.movieId) {
        setIslIked(true);
      }
    })
  }, [savedMovies]);

  if (isLiked) {
    likeClasses.push('button_icon_like-active');
  }

  function handleRemoveLike() {
    let mongoId;
    savedMovies.forEach((movie) => {
      if (movie.movieId === currentMovie.id || movie.movieId === currentMovie.movieId) {
        mongoId = movie._id;
      }
    })
    onRemoveLike(mongoId);
    setIslIked(false);
  }

  function handleLike() {
    if (!isLiked) {
      onPutLike(currentMovie, currentMovie.image.formats.thumbnail.url, currentMovie.image.url);
    } else {
      handleRemoveLike();
    }
  };

  function mathTime(duration) {
    return `${duration/60 > 0 ? `${Math.floor(duration/60)} ч ${duration%60 === 0 ? '' : `${duration - Math.floor(duration/60)*60} м`}` : `${duration} м`}`
  }

  return (
    <div className="film">
      <div className="film__header">
        <h2 className="film__title">{name}</h2>
        <p className="film__time">{mathTime(duration)}</p>
        <Route path="/movies">
          <Button className={likeClasses.join(' ')} onClick={handleLike} />
        </Route>

        <Route path="/saved-movies">
          <Button className="button button_icon_remove button_place_film" onClick={handleRemoveLike}/>
        </Route>
      </div>
      <img src={`https://api.nomoreparties.co${url}`} alt="Карточка фильма" className='film__image'/>
    </div>
  )
}
