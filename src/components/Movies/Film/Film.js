import Button from "../../Button/Button";
import { useState } from "react";
import { Route } from "react-router-dom";

export default function Film(props) {

  const [isLiked, setIsLiked] = useState(false);
  const likeClasses = ['button button_icon_like button_place_film'];


  function handleLike() {
    if (!isLiked) {
      props.onPutLike(props.info, props.info.image.formats.thumbnail.url, props.info.image.url);
      setIsLiked(!isLiked);
    }
  };

  if (isLiked) {
    likeClasses.push('button_icon_like-active');
  }

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
          <Button className="button button_icon_remove button_place_film" />
        </Route>
      </div>
      <img src={`https://api.nomoreparties.co${props.url}`} alt="Карточка фильма" className='film__image'/>
    </div>
  )
}
