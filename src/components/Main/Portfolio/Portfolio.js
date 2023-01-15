export default function Portfolio() {
  return (
    <section className="section portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__links">
        <a className="portfolio__link" href="https://eshenok.github.io/how-to-learn/" target="_blank">
          <li className="portfolio__link_arrow">Статичный сайт</li>
        </a>

        <a className="portfolio__link" href="https://eshenok.github.io/russian-travel/" target="_blank">
          <li className="portfolio__link_arrow">Адаптивный сайт</li>
        </a>
        <a className="portfolio__link" href="https://voloshin.eshenok.nomoredomains.club" target="_blank">
          <li className="portfolio__link_arrow">Одностраничное приложение</li>
        </a>
      </ul>
    </section>
  )
}
