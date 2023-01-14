import Button from "../Button/Button";

export default function Profile() {
  return (
    <section className="profile">
      <h2 className="profile__title">Привет</h2>
      <form className="profile__form">
        <div className="profile__input-container">
          <fieldset className="profile__fieldset">
            <label className="profile__label">Имя</label>
            <input
              type="text"
              className="input profile__input"
              id="input_type_editUserName"
              name="input_type_editUserName"
              minLength="2"
              maxLength="30"
              placeholder="Введите Ваше имя"
            />
          </fieldset>

          <fieldset className="profile__fieldset">
            <label className="profile__label">E-mail</label>
            <input
              type="email"
              className="input profile__input"
              id="input_type_editUserEmail"
              name="input_type_editUserEmail"
              minLength="2"
              maxLength="30"
              placeholder="Введите E-Mail"
            />
          </fieldset>
        </div>
        <div className="profile__button-container">
          <Button className={'button profile__button'} name={'Редактировать'}/>
          <Button className={'button profile__button profile__button_theme_red'} name={'Выйти из аккаунта'}/>
        </div>
      </form>
    </section>
  )
}
