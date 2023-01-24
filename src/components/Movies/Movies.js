import Search from "./Search/Search";
import Films from "./Films/Films";

export default function Movies({ movies }) {
  return (
    <main className="movies">
      <Search />
      <Films movies={movies} />
    </main>
  )
}
