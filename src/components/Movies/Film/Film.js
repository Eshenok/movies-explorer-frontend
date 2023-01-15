import Button from "../../common/Button/Button";
import filmPicture from "../../../images/filmPicture.png"

export default function Film() {
  return (
    <div className="film">
      <div className="film__header">
        <h2 className="film__title">Что-то о чем-то))))</h2>
        <p className="film__time">1ч 47м</p>
        <button className="button film__like-button"></button>
      </div>
      <img src={filmPicture} className='film__image'/>
    </div>
  )
}
