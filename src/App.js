import logo from './images/logo.svg';
import personalPhoto from './images/personalphoto.jpg';
import './App.css';

function App() {



  return (
    <>
      <header className="header">
        <img className="header__logo" alt="logo" src={logo}/>
        <div className="header__container">
          <a className="header__link">Регистрация</a>
          <button className="button button_theme_green button_place_header">Войти</button>
        </div>
      </header>

      <main className="main">

        <section className="section hero">
          <h1 className="hero__title">
            Учебный проект студента факультета Веб-разработки.
          </h1>
        </section>

        <section className="section navTab">
          <ul className="navTab__links">
            <a className="navTab__link" href="#"><li>О проекте</li></a>
            <a className="navTab__link" href="#"><li>Технологии</li></a>
            <a className="navTab__link" href="#"><li>Студент</li></a>
          </ul>
        </section>

        <section className="section section_margin promo">
          <h2 className="section__title section__title_border_white">О проекте</h2>
          <div className="promo__container">
            <article className="promo__brief">
              <h3 className="section__title promo__subtitle">Дипломный проект включал 5 этапов</h3>
              <p className="section__text promo__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            </article>
            <article className="promo__brief">
              <h3 className="section__title promo__subtitle">На выполнение диплома ушло 5 недель</h3>
              <p className="section__text promo__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </article>
          </div>
          <div className="promo__time">
            <p className="promo__block promo__block_theme_green">1 неделя</p>
            <p className="promo__block promo__block_theme_grey">4 недели</p>
            <p className="promo__block-caption">Back-end</p>
            <p className="promo__block-caption">Front-end</p>
          </div>
        </section>

        <section className="section section_margin tech">
          <h2 className="section__title section__title_border_white">Технологии</h2>
          <h3 className="tech__subtitle">7 технологий</h3>
          <p className="section__text tech__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          <div className="tech__tile">
            <p className="tech__tile_item">HTML</p>
            <p className="tech__tile_item">CSS</p>
            <p className="tech__tile_item">JS</p>
            <p className="tech__tile_item">React</p>
            <p className="tech__tile_item">Git</p>
            <p className="tech__tile_item">Express.js</p>
            <p className="tech__tile_item">MongoDB</p>
          </div>
        </section>

        <section className="section section_margin student">
          <h2 className="section__title section__title_border_white">Студент</h2>
          <img className="student__image" src={personalPhoto} alt="Портрет. Александр Волошин"/>
          <h3 className="student__name">Александр</h3>
          <p className="student__text">Фронтенд-разработчик, 23 года</p>
          <p className="student__text">Я родился и вырос в Москве, закончил Политехнический колледж по специальности "Прикладная информатика".
            Мое хобби: Гитара, 10+ лет, играю в стиле fingerstyle. Ранее работал в Интернет-провайдере и сети кинотеатров.
            В 2021 году решил сменить профессию и начал учиться на курсах Яндекс.Практикум.</p>
          <a className="student__ghlink">Github</a>
          <h3 className="student__subtitle">Портфолио</h3>
          <ul className="student__links">
            <a className="student__link"><li>Статичный сайт</li></a>
            <a className="student__link"><li>Адаптивный сайт</li></a>
            <a className="student__link"><li>Одностраничное приложение</li></a>
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
