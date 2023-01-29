import Search from "./Search/Search";
import Films from "./Films/Films";
import { useEffect, useState } from "react";

export default function Movies({ history, onSearch, movies, savedMovies, foundMovies, filmsQuantity, onMoreButton, onPutLike, onRemoveLike }) {

  const [isSearch, setIsSearch] = useState(false);
  const [moviesArr, setMoviesArr] = useState([]);

  function showFoundMovies(moviesArr, query, isShorts) {
    setIsSearch(true);
    onSearch(moviesArr, query, isShorts);
  }

  useEffect(() => {
    if (!isSearch && history.location.pathname === '/movies') {
      setMoviesArr(movies);
    } else if (isSearch) {
      setMoviesArr(foundMovies);
    } else {
      setMoviesArr(savedMovies)
    }
  })


  return (
    <main className="movies">
      <Search onSearch={showFoundMovies} movies={movies} savedMovies={savedMovies} history={history}/>
      <Films
        savedMovies={savedMovies}
        moviesArr={moviesArr}
        filmsQuantity={filmsQuantity}
        onMoreButton={onMoreButton}
        onPutLike={onPutLike}
        onRemoveLike={onRemoveLike}
      />
    </main>
  )
}
