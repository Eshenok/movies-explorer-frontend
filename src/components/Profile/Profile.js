import Button from "../Button/Button";
import { useContext, useEffect, useRef, useState } from "react";
import {CurrentUserContext} from "../../contexts/CurrentUserContext.js";
import { Input } from "../Input/Input";

export default function Profile({ onSubmit, onExit }) {

  const currentUser = useContext(CurrentUserContext); // subscribe

  const form = useRef();

  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [isValid, setIsValid] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(name, email);
    form.current.reset();
  }

  useEffect(() => {
    if (form.current.checkValidity() && name !== currentUser.name) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [email, name])

  return (
    <section className="profile">
      <h2 className="profile__title">{`Привет, ${currentUser.name}`}</h2>
      <form ref={form} className="profile__form" onSubmit={handleSubmit} noValidate>
        <div className="profile__input-container">
          <fieldset className="profile__fieldset">
            <label htmlFor={"input_type_editUserName"} className="profile__label">Имя</label>
            <Input
              type="text"
              className="input input_type_profile"
              id="input_type_editUserName"
              name="input_type_editUserName"
              minLength="2"
              maxLength="30"
              required={true}
              placeholder="Введите Ваше имя"
              isSpan={true}
              value={name}
              onChange={(e) => {setName(e.target.value)}}
            />
          </fieldset>

          <fieldset className="profile__fieldset">
            <label htmlFor={"input_type_editUserEmail"} className="profile__label">E-mail</label>
            <Input
              type="email"
              required={true}
              className="input input_type_profile"
              id="input_type_editUserEmail"
              name="input_type_editUserEmail"
              minLength="2"
              maxLength="30"
              placeholder="Введите E-Mail"
              isSpan={true}
              value={email}
              onChange={(e) => {setEmail(e.target.value)}}
            />
          </fieldset>
        </div>
        <div className="profile__button-container">
          <Button type="submit" className={`button button_place_profile button_theme_transparent-white ${!isValid ? "button_theme_text-disable" : ""}`} disabled={isValid ? false : true } name={'Редактировать'}/>
          <Button type="button" className={'button button_place_profile button_theme_transparent-red'} name={'Выйти из аккаунта'} onClick={onExit}/>
        </div>
      </form>
    </section>
  )
}
