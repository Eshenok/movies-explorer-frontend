import { Input } from "../common/Input/Input";
import { Link, Route } from "react-router-dom";
import logo from "../../images/logo.svg";
import React from "react";
import Button from "../common/Button/Button";

export default function Sign(props) {
  return (
    <section className="sign">
      <div className="sign__header">
        <img className="logo" alt="logo" src={logo}/>
        <Route path="/signup">
          <h2 className="sign__title">Добро пожаловать!</h2>
        </Route>
        <Route path="/signin">
          <h2 className="sign__title">Рады видеть!</h2>
        </Route>
      </div>
      <form className="sign__form" noValidate onSubmit={props.onSubmit}>
        <div className="sign__container">
          <Route path="/signup">
            <Input type="text"
                   id="input_type_userName"
                   className="input input_place_sign input_type_userName"
                   name="input_type_userName"
                   minLength="2"
                   maxLength="30"
                   required={true}
                   placeholder="Введите Ваше имя"
                   labelText="Имя"
            />
          </Route>

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
          />
          <Input type="password"
                 id="input_type_userPass"
                 className="input input_place_sign input_type_userPass"
                 name="input_type_userPass"
                 minLength="2"
                 maxLength="30"
                 required={true}
                 placeholder="Введите пароль"
                 labelText="Пароль"
          />
        </div>
        <div className="sign__container">
          <Route path="/signup">
            <Button className="button button_theme_blue button_place_sign" name={"Зарегистрироваться"} />
            <div className="sign__caption">
              <p className="sign__text">Уже зарегистрированы?</p>
              <Link className="sign__link" to="/signin">Войти</Link>
            </div>
          </Route>

          <Route path="/signin">
            <Button className="button button_theme_blue button_place_sign" name={"Войти"} />
            <div className="sign__caption">
              <p className="sign__text">Еще не зарегистрированы?</p>
              <Link className="sign__link" to="/signup">Регистрация</Link>
            </div>
          </Route>
        </div>
      </form>
    </section>
  )
}
