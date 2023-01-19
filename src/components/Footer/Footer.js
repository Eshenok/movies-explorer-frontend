export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <ul className="footer__links">
          <a className="footer__link" href="https://practicum.yandex.ru" target="_blank"><li>Яндекс.Практикум</li></a>
          <a className="footer__link" href="https://github.com/Eshenok" target="_blank"><li>Github</li></a>
        </ul>
        <p className="footer__copyright">&copy;{new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
