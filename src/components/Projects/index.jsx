import Project from '../Project'
import './styles.css'

function Projects({projects}){
  return(
    <section id="projects" className="projects">
    <div className="container">
      <h2>Meus projetos</h2>

      {
        projects.map((project, index) => <Project key={project.name} project={project} index={index}/>)
      }

    </div>
  </section>

  )

}

export default Projects