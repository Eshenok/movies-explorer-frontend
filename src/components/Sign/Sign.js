import { Input } from "../Input/Input";
import { Link, Route } from "react-router-dom";
import logo from "../../images/logo.svg";
import React, { useState } from "react";
import Button from "../Button/Button";


export default function Sign({ onSubmit, history, title, buttonTitle }) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (history.location.pathname === '/signup') {
      onSubmit(name, email, pass);
      setPass('');
    } else {
      onSubmit(email, pass);
    }
  }

  return (
    <section className="sign">
      <div className="sign__header">
        <img className="logo" alt="logo" src={logo}/>
        <h2 className="sign__title">{title}</h2>
      </div>
      <form className="sign__form" noValidate onSubmit={handleSubmit}>
        <div className="sign__container">
          <Route path="/signup">
            <label htmlFor="input_type_userName" className="sign__label">Имя</label>
            <Input type="text"
                   id="input_type_userName"
                   className="input input_place_sign"
                   name="input_type_userName"
                   minLength="2"
                   maxLength="30"
                   required={true}
                   placeholder="Введите Ваше имя"
                   value={name}
                   isSpan={true}
                   onChange={(e) => setName(e.target.value)}
            />
          </Route>

          <label htmlFor="input_type_userEmail" className="sign__label">E-mail</label>
          <Input
            type="email"
            id="input_type_userEmail"
            className="input input_place_sign"
            name="input_type_userEmail"
            minLength="2"
            maxLength="30"
            required={true}
            placeholder="Введите почту"
            isSpan={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="input_type_userPass" className="sign__label">Пароль</label>
          <Input type="password"
                 id="input_type_userPass"
                 className="input input_place_sign"
                 name="input_type_userPass"
                 minLength="2"
                 maxLength="30"
                 required={true}
                 placeholder="Введите пароль"
                 isSpan={true}
                 value={pass}
                 onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <div className="sign__container">
            <Button type="submit" className="button button_theme_blue button_place_sign" name={buttonTitle} />
            <div className="sign__caption">
              <Route path="/signup">
                <p className="sign__text">Уже зарегистрированы?</p>
                <Link className="sign__link" to="/signin">Войти</Link>
              </Route>
              <Route path="/signin">
                <p className="sign__text">Еще не зарегистрированы?</p>
                <Link className="sign__link" to="/signup">Регистрация</Link>
              </Route>
            </div>
        </div>
      </form>
    </section>
  )
}
