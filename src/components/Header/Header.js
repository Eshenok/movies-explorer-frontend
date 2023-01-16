import logo from "../../images/logo.svg";
import Button from "../common/Button/Button";
import { Link, Route } from "react-router-dom";

export default function Header({ onMenuPopup }) {

  return (
    <>
      <header className="header">
        <div className="header__container">
          <img className="logo header__logo" alt="logo" src={logo}/>
          <Route exact path="/">
            <nav className="header__navigation">
              <Link className="header__link" to="/signup">Регистрация</Link>
              <Link className="header__link header__link_theme_green" to="/signin">Войти</Link>
            </nav>
          </Route>

          <Route path="/movies">
            <Button className="button button_icon_burger" onClick={onMenuPopup} />
          </Route>

          <Route path="/profile">
            <Button className="button button_icon_burger" onClick={onMenuPopup} />
          </Route>
        </div>
      </header>
    </>
  )
}
