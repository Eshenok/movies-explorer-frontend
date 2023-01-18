import Film from "../Film/Film";

export default function Films({ history }) {
  return (
    <section className="films">
      <div className="films__container">
        <Film />
        <Film />
        <Film />
        <Film />
        <Film />
      </div>
      <button className="button films__more-button">Ещё</button>
    </section>
  )
}
