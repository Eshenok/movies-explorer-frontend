import logo from "../../images/logo.svg";
import Button from "../Button/Button";
import { Link, Route, useHistory } from "react-router-dom";
import React, {useState, useEffect} from 'react';

export default function Header() {

  return (
    <header className="header">
      <div className="header__container">
        <img className="logo header__logo" alt="logo" src={logo}/>
        <nav className="header__navigation">
          <Link className="header__link" to="/sign-up">Регистрация</Link>
          <Button className={"button button_theme_green button_place_header"} name={"Войти"} />
        </nav>
      </div>


    </header>
  )
}
