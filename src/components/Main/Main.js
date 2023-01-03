import Hero from "../Hero/Hero";
import NavTab from "../NavTab/NavTab";
import Promo from "../Promo/Promo";
import Tech from "../Tech/Tech";
import Student from "../Student/Student";
import Portfolio from "../Portfolio/Portfolio";
import { Input } from "../Input/Input";

export default function Main() {
  return (
    <main className="main">
      {/*<Hero />*/}
      {/*<NavTab />*/}
      {/*<Promo />*/}
      {/*<Tech />*/}
      {/*<Student />*/}
      {/*<Portfolio />*/}
      <section className="signup">
        <form className="signup__form">
          <Input type="text"
                 id="input_type_userName"
                 className="input input_place_sign input_type_userName"
                 name="input_type_userName"
                 minLength="2"
                 maxLength="30"
                 required={true}
                 placeholder="Введите Ваше имя"
                 labelText="Имя"
                 containerClass="signup__container"
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
            containerClass="signup__container"
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
                 containerClass="signup__container"
          />
          <button className="button button_theme_green button_place_signup">Зарегистрироваться</button>
          <div>
            <p className="signup__caption">Уже зарегистрированы?</p>
            <a className="signup__link">Войти</a>
          </div>
        </form>
      </section>
    </main>
  )
}
