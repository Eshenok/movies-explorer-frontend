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
            <Button className="button button_icon_burger button_display_none" />
            <div className="header__overlay"></div>
            <div className={'header__menu header__popup header__popup_open' }>
              <ul className="header__menu-links">
                <Link className="header__menu-link header__menu-link_display_none" to="/">Главная</Link>
                <Link className="header__menu-link" to="/main">Фильмы</Link>
                <Link className="header__menu-link" to="/saved">Сохранённые фильмы</Link>
              </ul>
              <div className="header__account">
                <p className="header__account_text">Аккаунт</p>
                <div className="header__account_image" />
              </div>
              <Button className="button button_icon_close button_place_header-popup button_display_none" />
            </div>
          </Route>
        </div>
      </header>
    </>
  )
}
