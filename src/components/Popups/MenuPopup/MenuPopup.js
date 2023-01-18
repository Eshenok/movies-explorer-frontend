import { Link } from "react-router-dom";
import AccountLink from "../../AccountLink/AccountLink";
import Button from "../../common/Button/Button";

export default function MenuPopup({ isOpen, onClose, history }) {

  const menuPopupClasses = ['menu-popup'];

  if (isOpen) {
    menuPopupClasses.push('menu-popup_opened');
  }

  return (
    <div className={menuPopupClasses.join(' ')}>
      <ul className="menu-popup__links">
        <Link className="menu-popup__link" to="/"><li>Главная</li></Link>
        <Link className={
          history.location.pathname === "/movies"
          ? "menu-popup__link menu-popup__link_current-page"
            : "menu-popup__link"
        }
              to="/movies"><li>Фильмы</li></Link>
        <Link className={
          history.location.pathname === "/saved-movies"
            ? "menu-popup__link menu-popup__link_current-page"
            : "menu-popup__link"
        }  to="/saved-movies"><li>Сохранённые фильмы</li></Link>
      </ul>
      <AccountLink />
      <Button className="button button_icon_close menu-popup__close-button" onClick={onClose}/>
    </div>
  )
}
