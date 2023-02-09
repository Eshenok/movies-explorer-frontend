import './App.css';
import React, {useState, useEffect} from 'react';
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import Header from './components/Header/Header';
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
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Preloader from "./components/Preloader/Preloader";

function App() {

  const [filmsQuantity, setFilmsQuantity] = useState(0);
  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [foundMovies, setFoundMovies] = useState([]);
  const [header, setHeader] = useState(true);
  const [footer, setFooter] = useState(true);
  const [isOpenMenuPopup, setIsOpenMenuPopup] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [preload, setPreload] = useState(false);
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
  }, [history.location.pathname, screenWidth])

  useEffect(() => {
    if (loggedIn) {
      setPreload(true);
      Promise.all([MainApi.getSavedMovies(), MoviesApi.getMovies()])
        .then((values) => {
          setSavedMovies(values[0]);
          setMovies(values[1]);
        }).catch((err) => {console.log(err)}).finally(() => {setPreload(false)})
    }
  },[loggedIn])

  useEffect(() => {
    if (!loggedIn) {
      setPreload(true);
      MainApi.getCurrentUser().then((res) => {
        setCurrentUser(res);
        setLoggedIn(true);
        history.push('/movies');
      }).catch((err) => {console.log(err)}).finally(() => {setPreload(false)})
    }
  }, [])

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
  }, [history.location.pathname])

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
      handleSignIn(email, pass);
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
    setPreload(true);
    MainApi.updateUser(name, email).then((res) => {
      setCurrentUser(res);
      history.push('/movies');
    }).catch((err) => {console.log(err)}).finally(() => {setPreload(false)});
  }

  function handleSignOut() {
    MainApi.signOut().then((res) => {
      setCurrentUser({});
      setLoggedIn(false);
      history.push('/signin');
      localStorage.removeItem('movies');
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
    }).catch((err) => {console.log(err)})
  }

  function handleFoundMovies(moviesArr, query, isShorts) {
    return moviesArr.filter((movie) => {
      return movie.nameRU.toUpperCase().includes(query.toUpperCase()) && isShorts ? movie
        : movie.nameRU.toUpperCase().includes(query.toUpperCase()) && !isShorts && movie.duration > 40
          ? movie : false
    })
  }

  function handleSearchMovie(moviesArr, query, isShorts, isSave) {
    setPreload(true);
    const foundMovies = handleFoundMovies(moviesArr, query, isShorts);
    setFoundMovies(foundMovies);
    if (isSave) {
      localStorage.setItem('movies', JSON.stringify({
        query: query,
        isShorts: isShorts,
        moviesArr: foundMovies,
      }))
    }
    setPreload(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {header ? <Header onMenuPopup={handleOpenMenuPopup} loggedIn={loggedIn} /> : <></>}
      <Switch>
        <ProtectedRoute
          path="/movies"
          component={Movies}
          history={history}
          onSearch={handleSearchMovie}
          movies={movies}
          savedMovies={savedMovies}
          foundMovies={foundMovies}
          filmsQuantity={filmsQuantity}
          onMoreButton={handleMoreButton}
          onPutLike={handlePutLike}
          onRemoveLike={handleRemoveLike}
          loggedIn={loggedIn}
        />

        <ProtectedRoute
          path="/saved-movies"
          component={Movies}
          history={history}
          onSearch={handleSearchMovie}
          movies={movies}
          savedMovies={savedMovies}
          foundMovies={foundMovies}
          filmsQuantity={filmsQuantity}
          onMoreButton={handleMoreButton}
          onRemoveLike={handleRemoveLike}
          loggedIn={loggedIn}
        />

        <ProtectedRoute
          path="/profile"
          component={Profile}
          onSubmit={handleUpdateUser}
          onExit={handleSignOut}
          loggedIn={loggedIn}
        />
        <Route exact path="/">
          <Main />
        </Route>

        <Route path="/signup">
          <Sign
            onSubmit={handleSignup}
            history={history}
            title={'Добро пожаловать!'}
            buttonTitle={'Зарегистрироваться'}
          />
        </Route>

        <Route exact path="/signin">
          <Sign
            onSubmit={handleSignIn}
            history={history}
            title={'Рады видеть!'}
            buttonTitle={'Войти'}
          />
        </Route>

        <Route path="*">
          <NotFound history={history}/>
        </Route>
      </Switch>
      {footer ? <Footer /> : <></>}
      <MenuPopup isOpen={isOpenMenuPopup} onClose={closeAllPopups} history={history} />
      {preload ? <Preloader /> : <></>}
    </CurrentUserContext.Provider>
  );
}

export default App;
