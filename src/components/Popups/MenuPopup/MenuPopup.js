import { Link } from "react-router-dom";
import AccountLink from "../../AccountLink/AccountLink";
import Button from "../../common/Button/Button";

export default function MenuPopup() {
  return (
    <div className="menu-popup">
      <ul className="menu-popup__links">
        <Link className="menu-popup__link"><li></li></Link>
        <Link className="menu-popup__link"><li></li></Link>
        <Link className="menu-popup__link"><li></li></Link>
      </ul>
      <AccountLink />
      <Button className="button button_icon_close" />
    </div>
  )
}
