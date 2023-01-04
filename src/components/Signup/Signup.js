import { Input } from "../Input/Input";

export default function Signup() {
  return (
    <section className="signup">
      <form className="signup__form" noValidate>
        <div className="signup__container">
          <Input type="text"
                 id="input_type_userName"
                 className="input input_place_sign input_type_userName"
                 name="input_type_userName"
                 minLength="2"
                 maxLength="30"
                 required={true}
                 placeholder="Введите Ваше имя"
                 labelText="Имя"
                 containerClass="input__container"
          />
          <Input
            type="email"
            id="input_type_userEmail"
            className="input input_place_sign input_type_userEmail"
            name="input_type_userEmail"
            minLength="2"
            maxLength="30"
            required={true}
            placeholder="Введите почту"
            labelText="E-mail"
            containerClass="input__container"
          />
          <Input type="password"
                 id="input_type_userPass"
                 className="input input_place_sign input_type_userPass"
                 name="input_type_userPass"
                 minLength="2"
                 maxLength="30"
                 required={true}
                 placeholder="Придумайте пароль"
                 labelText="Пароль"
                 containerClass="input__container"
          />
        </div>
        <div className="signup__container">
          <button className="button button_theme_blue button_place_signup">Зарегистрироваться</button>
          <div className="signup__caption">
            <p className="signup__text">Уже зарегистрированы?</p>
            <a className="signup__link">Войти</a>
          </div>
        </div>
      </form>
    </section>
  )
}
