import Search from "./Search/Search";
import Films from "./Films/Films";

export default function Movies(props) {
  return (
    <main className="movies">
      <Search />
      <Films {...props}/>
    </main>
  )
}
