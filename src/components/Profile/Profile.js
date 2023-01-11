import { Input } from "../Input/Input";
import Button from "../Button/Button";

export default function Profile() {
  return (
    <section className="profile">
      <h2 className="profile__title">Привет</h2>
      <form className="profile__form">
        <div className="profile__input-container">
          <Input
          type="text"
          className="input"
          id="input_type_editUserName"
          name="input_type_editUserName"
          minLength="2"
          maxLength="30"
          placeholder="Введите Ваше имя"
          labelText="Имя"
          />
          <Input
            type="email"
            className="input"
            id="input_type_editUserEmail"
            name="input_type_editUserEmail"
            minLength="2"
            maxLength="30"
            placeholder="Введите E-Mail"
            labelText="Имя"
          />
        </div>
        <div className="profile__button-container">
          <Button className={'button'} name={'Редактировать'}/>
          <Button className={'button'} name={'Выйти из аккаунта'}/>
        </div>
      </form>
    </section>
  )
}
