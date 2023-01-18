import './App.css';
import React, {useState, useEffect} from 'react';
import { Route, Switch, useHistory } from "react-router-dom";
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Sign from "./components/Sign/Sign";
import Profile from "./components/Profile/Profile";
import NotFound from "./components/NotFound/NotFound";
import Movies from "./components/Movies/Movies";
import MenuPopup from "./components/Popups/MenuPopup/MenuPopup";

function App() {

  const [header, setHeader] = useState(true);
  const [footer, setFooter] = useState(true);
  const [isOpenMenuPopup, setIsOpenMenuPopup] = useState(false);
  const history = useHistory();

  useEffect(() => {
    /*Слушай историю и при ее изменении проверяем необходимость footer и header*/
    history.listen(() => {
      closeAllPopups(); /*При переходе по ссылке будет закрывать все попапы*/
      if (history.location.pathname === '/signin' || history.location.pathname === '/signup') {
        setHeader(false);
        setFooter(false);
      } else if (history.location.pathname === '/profile') {
        setHeader(true);
        setFooter(false);
      } else {
        setHeader(true);
        setFooter(true);
      }
    })
  })

  function blockScrollY () { /*При открытии модального окна блокируем прокрутку*/
    document.body.style.overflow = 'hidden';
    document.body.style.top = `-${window.scrollY}px`;
  }

  function unblockScrollY () {
    const scrollY = document.body.style.top;
    document.body.style.overflow = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  }

  function handleLogIn() {
    /*Временный костыль*/
    history.push('./movies');
  }

  function handleOpenMenuPopup () {
    blockScrollY();
    setIsOpenMenuPopup(true)
  };

  function closeAllPopups() {
    unblockScrollY();
    setIsOpenMenuPopup(false);
  }

  return (
    <>
      {header ? <Header onMenuPopup={handleOpenMenuPopup} /> : <></>}
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route path="/signup">
          <Sign  />
        </Route>

        <Route exact path="/signin">
          <Sign onSubmit={handleLogIn} />
        </Route>

        <Route path="/movies">
          <Movies />
        </Route>

        <Route path="/saved-movies">
          <Movies />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      {footer ? <Footer /> : <></>}
      <MenuPopup isOpen={isOpenMenuPopup} onClose={closeAllPopups} history={history} />
    </>
  );
}

export default App;
