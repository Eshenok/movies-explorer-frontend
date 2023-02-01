import Button from "../../Button/Button";
import { useEffect, useState } from "react";
import { Route } from "react-router-dom";

export default function Film(props) {

  const [isLiked, setIslIked] = useState('');

  let movieId;
  const likeClasses = ['button button_icon_like button_place_film'];

  useEffect(() => {
    props.savedMovies.forEach((elem) => {
      if (props.history.location.pathname === '/saved-movies') {
        setIslIked(props.currentMovie._id);
      } else {
        if (props.currentMovie.id === elem.movieId) {
          setIslIked(elem._id)
        }
      }
    })
  }, [props.savedMovies])

  if (isLiked !== "") {
    likeClasses.push('button_icon_like-active');
  }

  function handleRemoveLike() {
    props.onRemoveLike(movieId);
    setIslIked("");
  }

  function handleLike() {
    if (!isLiked) {
      props.onPutLike(props.currentMovie, props.currentMovie.image.formats.thumbnail.url, props.currentMovie.image.url);
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
        <h2 className="film__title">{props.name}</h2>
        <p className="film__time">{mathTime(props.duration)}</p>
        <Route path="/movies">
          <Button className={likeClasses.join(' ')} onClick={handleLike} />
        </Route>

        <Route path="/saved-movies">
          <Button className="button button_icon_remove button_place_film" onClick={handleRemoveLike}/>
        </Route>
      </div>
      <img src={`https://api.nomoreparties.co${props.url}`} alt="Карточка фильма" className='film__image'/>
    </div>
  )
}
