import Hero from "../Hero/Hero";
import NavTab from "../NavTab/NavTab";
import Promo from "../Promo/Promo";
import Tech from "../Tech/Tech";
import Student from "../Student/Student";
import Portfolio from "../Portfolio/Portfolio";
import { Input } from "../Input/Input";
import Sign from "../Sign/Sign";
import { Route } from "react-router-dom";

export default function Main() {
  return (
    <main className="main">
      <Route exact path="/">
        <Hero />
        <NavTab />
        <Promo />
        <Tech />
        <Student />
        <Portfolio />
      </Route>

      <Route path="/main">
        <Student />
      </Route>
    </main>
  )
}
