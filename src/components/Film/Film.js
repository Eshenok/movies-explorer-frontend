import Button from "../Button/Button";
import personalPhoto from "../../images/personalphoto.jpg"

export default function Film() {
  return (
    <div className="film">
      <div className="film__header">
        <h2 className="film__title">Что-то о чем-то))))</h2>
        <p className="film__time">1ч 47м</p>
        <button className="button film__like-button"></button>
      </div>
      <div className="film__image" style={{backgroundImage: personalPhoto}}/>
    </div>
  )
}
