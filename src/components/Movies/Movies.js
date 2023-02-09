import Search from "./Search/Search";
import Films from "./Films/Films";
import { useEffect, useState } from "react";

export default function Movies({ history, onSearch, movies, savedMovies, foundMovies, filmsQuantity, onMoreButton, onPutLike, onRemoveLike }) {

  const [isSearch, setIsSearch] = useState(false);
  const [moviesArr, setMoviesArr] = useState([]);
  const foundedMovies = JSON.parse(localStorage.getItem('movies'));

  useEffect(() => {
    if (localStorage.getItem('movies')) {
      setIsSearch(true);
    }
  }, [])

  useEffect(() => {
    if (localStorage.getItem('movies') && history.location.pathname !== "/saved-movies") {
      setMoviesArr(foundedMovies.moviesArr);
    } else if (!isSearch && history.location.pathname === '/movies') {
      setMoviesArr(movies);
    } else if (isSearch) {
      setMoviesArr(foundMovies);
    } else {
      setMoviesArr(savedMovies)
    }
  }, [isSearch, movies, foundMovies, savedMovies, history.location.pathname, foundedMovies])

  function showFoundMovies(moviesArr, query, isShorts, isSave) {
    setIsSearch(true);
    onSearch(moviesArr, query, isShorts, isSave);
  }

  function clearSearch() {
    if (history.location.pathname === "/movies") {
      localStorage.removeItem('movies');
    }
    setIsSearch(false);
  }

  return (
    <main className="movies">
      <Search localFilms={foundedMovies} onSearch={showFoundMovies} onClear={clearSearch} movies={movies} savedMovies={savedMovies} history={history}/>
      <Films
        savedMovies={savedMovies}
        moviesArr={moviesArr}
        filmsQuantity={filmsQuantity}
        onMoreButton={onMoreButton}
        onPutLike={onPutLike}
        onRemoveLike={onRemoveLike}
        history={history}
      />
    </main>
  )
}
