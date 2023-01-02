export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <ul className="footer__links">
        <a className="footer__link"><li>Яндекс.Практикум</li></a>
        <a className="footer__link"><li>Github</li></a>
      </ul>
      <p className="footer__copyright">&copy;{new Date().getFullYear()}</p>
    </footer>
  )
}
