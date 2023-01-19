import Button from "../../Button/Button";
import filmPicture from "../../../images/filmPicture.png"
import { useState } from "react";
import { Route } from "react-router-dom";

export default function Film() {

  const [isLiked, setIsLiked] = useState(false);
  const likeClasses = ['button film__like-button'];

  function handleLike() {setIsLiked(!isLiked)};

  if (isLiked) {
    likeClasses.push('film__like-button_active');
  }

  return (
    <div className="film">
      <div className="film__header">
        <h2 className="film__title">Что-то о чем-то))))</h2>
        <p className="film__time">1ч 47м</p>
        <Route path="/movies">
          <Button className={likeClasses.join(' ')} onClick={handleLike} />
        </Route>

        <Route path="/saved-movies">
          <Button className="button film__remove-button" />
        </Route>
      </div>
      <img src={filmPicture} className='film__image'/>
    </div>
  )
}
