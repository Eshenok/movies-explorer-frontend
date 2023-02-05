import { Input } from "../Input/Input";
import { Link, Route } from "react-router-dom";
import logo from "../../images/logo.svg";
import Button from "../Button/Button";


export default function Sign({ onSubmit, history, title, buttonTitle, handleChange, errors, isValid, resetForm, values }) {

  function handleSubmit(e) {
    e.preventDefault();
    if (history.location.pathname === '/signup') {
      onSubmit(values.input_type_userName, values.input_type_userEmail, values.input_type_userPass);
    } else {
      onSubmit(values.input_type_userEmail, values.input_type_userPass);
    }
    resetForm();
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
                   isSpan={true}
                   onChange={handleChange}
                   error={errors.input_type_userName}
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
            onChange={handleChange}
            error={errors.input_type_userEmail}
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
                 onChange={handleChange}
                 error={errors.input_type_userPass}
          />
        </div>
        <div className="sign__container">
            <Button type="submit" className={`button button_theme_blue button_place_sign ${!isValid ? "button_theme_disable" : ""}`} disabled={isValid ? false : true } name={buttonTitle} />
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
