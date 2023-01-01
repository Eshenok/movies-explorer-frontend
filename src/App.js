import personalPhoto from './images/personalphoto.jpg';
import './App.css';
import Header from './components/Header/Header'
import Hero from "./components/Hero/Hero";
import NavTab from "./components/NavTab/NavTab";
import Promo from "./components/Promo/Promo";
import Tech from "./components/Tech/Tech";
function App() {



  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <NavTab />
        <Promo />
        <Tech />
        <section className="student">
          <h2 className="section__title section__title_border_white student__title">Студент</h2>
          <img className="student__image" src={personalPhoto} alt="Портрет. Александр Волошин"/>
          <div className="student__container">
            <h3 className="student__name">Александр</h3>
            <p className="section__text student__text">Фронтенд-разработчик, 23 года</p>
            <p className="section__text student__text">Я родился и вырос в Москве, закончил Политехнический колледж по специальности "Прикладная информатика".
              Мое хобби: Гитара, 10+ лет, играю в стиле fingerstyle. Ранее работал в Интернет-провайдере и сети кинотеатров.
              В 2021 году решил сменить профессию и начал учиться на курсах Яндекс.Практикум.</p>
          </div>
          <a className="student__ghlink">Github</a>
        </section>

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
