import Button from "../Button/Button";

export default function Profile({ onExit }) {
  return (
    <section className="profile">
      <h2 className="profile__title">Привет, Александр</h2>
      <form className="profile__form">
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
              value="Александр"
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
              value="E-mail"
            />
          </fieldset>
        </div>
        <div className="profile__button-container">
          <Button className={'button button_place_profile button_theme_transparent-white'} name={'Редактировать'}/>
          <Button className={'button button_place_profile button_theme_transparent-red'} name={'Выйти из аккаунта'} onClick={onExit} />
        </div>
      </form>
    </section>
  )
}
