import logo from "../../images/logo.svg";
import Button from "../Button/Button";

export default function Header() {
  return (
    <header className="header">
      <img className="header__logo" alt="logo" src={logo}/>
      <div className="header__container">
        <a className="header__link">Регистрация</a>
        <Button className={"button button_theme_green button_place_header"} name={"Войти"} />
      </div>
    </header>
  )
}
