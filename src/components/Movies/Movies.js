import Search from "./Search/Search";
import Films from "./Films/Films";
import { useEffect, useState } from "react";

export default function Movies({ history, onSearch, movies, savedMovies, foundMovies, filmsQuantity, onMoreButton, onPutLike, onRemoveLike }) {

  const [isSearch, setIsSearch] = useState(false);
  const [moviesArr, setMoviesArr] = useState([]);

  useEffect(() => {
    if (!isSearch && history.location.pathname === '/movies') {
      setMoviesArr(movies);
    } else if (isSearch) {
      setMoviesArr(foundMovies);
    } else {
      setMoviesArr(savedMovies)
    }
  })

  function showFoundMovies(moviesArr, query, isShorts) {
    setIsSearch(true);
    onSearch(moviesArr, query, isShorts);
  }

  function clearSearch() {
    setIsSearch(false);
  }

  return (
    <main className="movies">
      <Search onSearch={showFoundMovies} onClear={clearSearch} movies={movies} savedMovies={savedMovies} history={history}/>
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
