import Button from "../../Button/Button";
import filmPicture from "../../../images/filmPicture.png"
import { useState } from "react";
import { Route } from "react-router-dom";

export default function Film() {

  const [isLiked, setIsLiked] = useState(false);
  const likeClasses = ['button button_icon_like button_place_film'];

  function handleLike() {setIsLiked(!isLiked)};

  if (isLiked) {
    likeClasses.push('button_icon_like-active');
  }

  return (
    <div className="film">
      <div className="film__header">
        <h2 className="film__title">Карточка фильма</h2>
        <p className="film__time">1ч 47м</p>
        <Route path="/movies">
          <Button className={likeClasses.join(' ')} onClick={handleLike} />
        </Route>

        <Route path="/saved-movies">
          <Button className="button button_icon_remove button_place_film" />
        </Route>
      </div>
      <img src={filmPicture} alt="Карточка фильма" className='film__image'/>
    </div>
  )
}
