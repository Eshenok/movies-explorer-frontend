import Search from "./Search/Search";
import Films from "./Films/Films";

export default function Movies(props) {
  return (
    <main className="movies">
      <Search onSearch={props.onSearch} movies={props.movies} savedMovies={props.savedMovies} history={props.history}/>
      <Films {...props}/>
    </main>
  )
}
