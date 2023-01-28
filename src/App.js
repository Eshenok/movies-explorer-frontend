import './App.css';
import React, {useState, useEffect} from 'react';
import { Redirect, Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Sign from "./components/Sign/Sign";
import Profile from "./components/Profile/Profile";
import NotFound from "./components/NotFound/NotFound";
import Movies from "./components/Movies/Movies";
import MenuPopup from "./components/Popups/MenuPopup/MenuPopup";
import MainApi from "./utils/MainApi";
import MoviesApi from "./utils/MoviesApi";
import { CurrentUserContext } from "./contexts/CurrentUserContext";

function App() {

  const [filmsQuantity, setFilmsQuantity] = useState(0);
  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [header, setHeader] = useState(true);
  const [footer, setFooter] = useState(true);
  const [isOpenMenuPopup, setIsOpenMenuPopup] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();
  let {path, url} = useRouteMatch(); // По факту не используется, но только с ним работает приложение

  const screenWidth = window.screen.width;

  useEffect(() => {
    if (screenWidth < 576) {
      setFilmsQuantity(5);
    } else if (screenWidth < 930) {
      setFilmsQuantity(8);
    } else {
      setFilmsQuantity(12);
    }
  }, [])

  useEffect(() => {
    MoviesApi.getMovies().then((res) => {
      setMovies(res);
    }).catch((err) => {console.log(err)})
    MainApi.getSavedMovies().then((res) => {
      setSavedMovies(res);
    }).catch((err) => {console.log(err)})
  },[])

  useEffect(() => {
    /*Прослушка истории и при ее изменении проверяем необходимость footer и header*/
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

  /*
   * Функции не отвечающие за работу Api
   */

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

  function handleOpenMenuPopup () {
    blockScrollY();
    setIsOpenMenuPopup(true)
  };

  function closeAllPopups() {
    unblockScrollY();
    setIsOpenMenuPopup(false);
  }

  function handleMoreButton() {
    if (screenWidth > 930) {
      setFilmsQuantity(filmsQuantity + 3);
    } else {
      setFilmsQuantity(filmsQuantity + 2);
    }
  }

  /*
   * Функции работы с MainApi
   */
  function handleSignup(name, email, pass) {
    MainApi.createUser(name, email, pass).then((res) => {
      history.push('/signin');
    }).catch((err) => {console.log(err)});
  }

  function handleSignIn(email, pass) {
    MainApi.signIn(email, pass).then((res) => {
      setCurrentUser(res);
      setLoggedIn(true);
      history.push('/movies');
    }).catch((err) => {console.log(err)});
  }

  function handleUpdateUser(name, email) {
    MainApi.updateUser(name, email).then((res) => {
      setCurrentUser(res);
      history.push('/movies');
    }).catch((err) => {console.log(err)})
  }

  function handleSignOut() {
    MainApi.signOut().then((res) => {
      setCurrentUser({});
      setLoggedIn(false);
      history.push('/signin');
    })
  }

  function handlePutLike(movie, thumbnail, image) {
    MainApi.putLike(movie, thumbnail, image).then((res) => {
      setSavedMovies([...savedMovies, res]);
    }).catch((err) => {console.log(err)});
  }

  function handleRemoveLike(id) {
    MainApi.removeSavedMovie(id).then((res) => {
      setSavedMovies(savedMovies.filter((elem) => elem.movieId !== res.movieId ? elem : false))
    })
  }

  function handleSearchMovie(moviesArr, query, isShorts) {
    setMovies(moviesArr.filter((movie) => {
      return movie.nameRU.includes(query) && isShorts ? movie
        : movie.nameRU.includes(query) && !isShorts && movie.duration > 40
          ? movie : false
    })
    )
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {header ? <Header onMenuPopup={handleOpenMenuPopup} loggedIn={loggedIn} /> : <></>}
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route path="/signup">
          <Sign onSubmit={handleSignup} history={history} title={'Добро пожаловать!'} buttonTitle={'Зарегистрироваться'}/>
        </Route>

        <Route exact path="/signin">
          <Sign onSubmit={handleSignIn} history={history} title={'Рады видеть!'} buttonTitle={'Войти'}/>
        </Route>

        <Route path="/movies">
          <Movies
            history={history}
            onSearch={handleSearchMovie}
            movies={movies}
            savedMovies={savedMovies}
            filmsQuantity={filmsQuantity}
            onMoreButton={handleMoreButton}
            onPutLike={handlePutLike}
            onRemoveLike={handleRemoveLike}
          />
        </Route>

        <Route path="/saved-movies">
          <Movies
            history={history}
            onSearch={handleSearchMovie}
            movies={movies}
            savedMovies={savedMovies}
            filmsQuantity={filmsQuantity}
            onMoreButton={handleMoreButton}
            onRemoveLike={handleRemoveLike}
          />
        </Route>

        <Route path="/profile">
          <Profile onSubmit={handleUpdateUser} onExit={handleSignOut}/>
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      {footer ? <Footer /> : <></>}
      <MenuPopup isOpen={isOpenMenuPopup} onClose={closeAllPopups} history={history} />
    </CurrentUserContext.Provider>
  );
}

export default App;
