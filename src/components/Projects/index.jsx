import Project from '../Project'
import './styles.css'

function Projects({ projects }) {
  return (
    <section id="projects" className="projects">
      <h2>Meus projetos</h2>

      <div className="container">

        {
          projects.map((project) => <Project key={project.name} project={project} />)
        }

      </div>
    </section>
  )
}

export default Projects