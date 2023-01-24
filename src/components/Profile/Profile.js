import Button from "../Button/Button";
import { useContext, useState } from "react";
import {CurrentUserContext} from "../../contexts/CurrentUserContext.js";

export default function Profile({ onSubmit, onExit }) {

  const currentUser = useContext(CurrentUserContext); // subscribe
  const [email, setEmail] = useState(currentUser.email);
  const [name, setName] = useState(currentUser.name);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(name, email);
  }

  return (
    <section className="profile">
      <h2 className="profile__title">{`Привет, ${currentUser.name}`}</h2>
      <form className="profile__form" onSubmit={handleSubmit} noValidate>
        <div className="profile__input-container">
          <fieldset className="profile__fieldset">
            <label htmlFor={"input_type_editUserName"} className="profile__label">Имя</label>
            <input
              type="text"
              className="input input_type_profile"
              id="input_type_editUserName"
              name="input_type_editUserName"
              minLength="2"
              maxLength="30"
              placeholder="Введите Ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </fieldset>

          <fieldset className="profile__fieldset">
            <label htmlFor={"input_type_editUserEmail"} className="profile__label">E-mail</label>
            <input
              type="email"
              className="input input_type_profile"
              id="input_type_editUserEmail"
              name="input_type_editUserEmail"
              minLength="2"
              maxLength="30"
              placeholder="Введите E-Mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>
        </div>
        <div className="profile__button-container">
          <Button type="submit" className={'button button_place_profile button_theme_transparent-white'} name={'Редактировать'}/>
          <Button type="button" className={'button button_place_profile button_theme_transparent-red'} name={'Выйти из аккаунта'} onClick={onExit}/>
        </div>
      </form>
    </section>
  )
}
