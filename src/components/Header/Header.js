import logo from "../../images/logo.svg";
import Button from "../Button/Button";
import { Link, Route, } from "react-router-dom";
import { useState } from "react";

export default function Header(props) {


  return (
    <>
      <header className="header">
        <div className="header__container">
          <img className="logo header__logo" alt="logo" src={logo}/>
          <Route exact path="/">
            <nav className="header__navigation">
              <Link className="header__link" to="/sign-up">Регистрация</Link>
              <Button className={"button button_theme_green"} name={"Войти"} />
            </nav>
          </Route>

          <Route path="/main">
            <Button className="button button_icon_burger" />
          </Route>
        </div>
      </header>
    </>
  )
}
