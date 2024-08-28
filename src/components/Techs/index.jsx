import './styles.css'

function Techs() {
  const mainTechs = ["React", "Vue", "Node.js", "React Native"];
  const secondaryTechs = ["Python", "Java", "SQL"];

  return (
    <section id="techs" className="techs">
      <div className="techs-container">
        <h2>Tecnologias Principais</h2>

        <p>
          {mainTechs.join(" | ")}
        </p>

        <h3>Outras Tecnologias</h3>

        <p>
          {secondaryTechs.join(" | ")}
        </p>

      </div>
    </section>

  )
}

export default Techs