import Search from "./Search/Search";
import Films from "./Films/Films";
import { useEffect, useMemo, useState } from "react";

export default function Movies({ history, onSearch, savedMovies, filmsQuantity, onPutLike, onRemoveLike }) {

  const [isSearch, setIsSearch] = useState(false);
  const foundedMovies = JSON.parse(localStorage.getItem('foundedMovies'));
  const allMovies = JSON.parse(localStorage.getItem('movies'));

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

  useEffect(() => {
    if (foundedMovies) {
      setIsSearch(true);
    }
  }, [])


  const moviesArr = useMemo(() => {
    return isSearch ? foundedMovies.movies : allMovies;
  }, [isSearch])

  function showFoundMovies(moviesArr, query, isShorts, isSave) {
    setIsSearch(true);
    onSearch(moviesArr, query, isShorts, isSave);
  }

  function clearSearch() {
    localStorage.removeItem('foundedMovies');
    setIsSearch(false);
  }


  return (
    <main className="movies">
      <Search movies={moviesArr} foundedMovies={foundedMovies} isSearch={isSearch} onSearch={showFoundMovies} onClear={clearSearch} savedMovies={savedMovies} history={history}/>
      <Films
        savedMovies={savedMovies}
        moviesArr={moviesArr}
        filmsQuantity={filmsQuantity}
        // onMoreButton={onMoreButton}
        onPutLike={onPutLike}
        onRemoveLike={onRemoveLike}
        history={history}
      />
    </main>
  )
}
