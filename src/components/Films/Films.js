import Film from "../Film/Film";

export default function Films() {
  return (
    <section className="films">
      <Film />
      <Film />
      <Film />
      <Film />
      <Film />
      <button className="button films__more-button">Еще</button>
    </section>
  )
}
