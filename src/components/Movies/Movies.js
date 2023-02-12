import Search from "./Search/Search";
import Films from "./Films/Films";
import { useEffect, useMemo, useState } from "react";

export default function Movies({ history, onSearch, savedMovies, defaultFilmsQuantity, onPutLike, onRemoveLike, screenWidth, loggedIn }) {

  const [filmsQuantity, setFilmsQuantity] = useState(defaultFilmsQuantity);
  const [isSearch, setIsSearch] = useState(0);

  const savedFoundedMovies = JSON.parse(localStorage.getItem('savedFoundedMovies'));
  const foundedMovies = JSON.parse(localStorage.getItem('foundedMovies'));
  const allMovies = localStorage.getItem('movies') ? JSON.parse(localStorage.getItem('movies')) : [];
  const step = screenWidth > 930 ? 3 : 2;
  // useEffect(() => {
  //   if (localStorage.getItem('movies')) {
  //     setIsSearch(true);
  //   }
  // }, [])

  // useEffect(() => {
  //   if (localStorage.getItem('movies') && history.location.pathname !== "/saved-movies") {
  //     setMoviesArr(foundedMovies.moviesArr);
  //   } else if (!isSearch && history.location.pathname === '/movies') {
  //     setMoviesArr(movies);
  //   } else if (isSearch) {
  //     setMoviesArr(foundMovies);
  //   } else {
  //     setMoviesArr(savedMovies)
  //   }
  // }, [isSearch, savedMovies, history.location.pathname, foundedMovies])

  /*Предзагрузка если есть найденные фильмы в LS*/
  useEffect(() => {
    if (foundedMovies && history.location.pathname === '/movies') {
      setIsSearch(isSearch+1);
    } else {
      setIsSearch(0);
    }
  }, [history.location.pathname])

  /*При изм разрешения добивать ряд до конца*/
  useEffect(() => {
    setFilmsQuantity(filmsQuantity + (filmsQuantity%step == 0 ? 0 : (filmsQuantity+1)%step == 0 ? 1 : (filmsQuantity+2)%step == 0 ? 2 : 0));
  }, [screenWidth])

  const moviesArr = useMemo(() => {
    return isSearch && history.location.pathname === '/movies'
      ? foundedMovies.movies : history.location.pathname === '/movies'
        ? allMovies : savedFoundedMovies
          ? savedFoundedMovies.movies : savedMovies;
  }, [isSearch, history.location.pathname])

  function handleMoreButton() {setFilmsQuantity(filmsQuantity + step)}

  function showFoundMovies(moviesArr, query, isShorts, isSave) {
    setIsSearch(isSearch+1);
    setFilmsQuantity(defaultFilmsQuantity);
    onSearch(moviesArr, query, isShorts, isSave);
  }

  function clearSearch() {
    localStorage.removeItem('foundedMovies');
    localStorage.removeItem('movies');
    setIsSearch(0);
  }

  return (
    <main className="movies">
      <Search movies={allMovies} foundedMovies={foundedMovies} savedMovies={savedMovies} isSearch={isSearch} onSearch={showFoundMovies} onClear={clearSearch} history={history}/>
      <Films
        savedMovies={savedMovies}
        moviesArr={moviesArr}
        filmsQuantity={filmsQuantity}
        onMoreButton={handleMoreButton}
        onPutLike={onPutLike}
        onRemoveLike={onRemoveLike}
        history={history}
      />
    </main>
  )
}
