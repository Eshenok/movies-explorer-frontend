import personalPhoto from './images/personalphoto.jpg';
import './App.css';
import Header from './components/Header/Header'
import Hero from "./components/Hero/Hero";
import NavTab from "./components/NavTab/NavTab";
import Promo from "./components/Promo/Promo";
import Tech from "./components/Tech/Tech";
import Student from "./components/Student/Student";
function App() {



  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <NavTab />
        <Promo />
        <Tech />
        <Student />

        <section className="portfolio">
          <h3 className="portfolio__title">Портфолио</h3>
          <ul className="portfolio__links">
            <a className="portfolio__link"><li>Статичный сайт</li></a>
            <a className="portfolio__link"><li>Адаптивный сайт</li></a>
            <a className="portfolio__link"><li>Одностраничное приложение</li></a>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <ul className="footer__links">
          <a className="footer__link"><li>Яндекс.Практикум</li></a>
          <a className="footer__link"><li>Github</li></a>
        </ul>
        <p className="footer__copyright">&copy;{new Date().getFullYear()}</p>
      </footer>

    </>
  );
}

export default App;
