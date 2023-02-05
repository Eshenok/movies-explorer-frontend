import Button from "../Button/Button";
import { useContext } from "react";
import {CurrentUserContext} from "../../contexts/CurrentUserContext.js";
import { Input } from "../Input/Input";

export default function Profile({ onSubmit, onExit, errors, isValid, values, handleChange }) {

  const currentUser = useContext(CurrentUserContext); // subscribe

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values.input_type_editUserName, values.input_type_editUserEmail);
  }

  return (
    <section className="profile">
      <h2 className="profile__title">{`Привет, ${currentUser.name}`}</h2>
      <form className="profile__form" onSubmit={handleSubmit} noValidate>
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
              onChange={handleChange}
              defaultValue={currentUser.name}
              error={errors.input_type_editUserName}
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
              onChange={handleChange}
              defaultValue={currentUser.email}
              error={errors.input_type_editUserEmail}
            />
          </fieldset>
        </div>
        <div className="profile__button-container">
          <span className="input__span-error profile__error">{errors.input_type_editUserName || errors.input_type_editUserEmail}</span>
          <Button type="submit" className={`button button_place_profile button_theme_transparent-white ${!isValid ? "button_theme_text-disable" : ""}`} disabled={isValid ? false : true } name={'Редактировать'}/>
          <Button type="button" className={'button button_place_profile button_theme_transparent-red'} name={'Выйти из аккаунта'} onClick={onExit}/>
        </div>
      </form>
    </section>
  )
}
