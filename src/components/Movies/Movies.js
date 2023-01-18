import Search from "./Search/Search";
import Films from "./Films/Films";
import { Route } from "react-router-dom";

export default function Movies() {
  return (
    <main className="movies">
      <Search />
      <Films />
    </main>
  )
}
