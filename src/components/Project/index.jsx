import './styles.css'


function Project({ project }) {
  
  return (
    <article>
      <img src={project.img} alt={`Screenshot of ${project.name}`} loading="lazy" />

      <div className="text">
        <h3>{project.name}</h3>

        <p className="black-box">
          {project.description}
        </p>

        <ul>
          <li><a href={project.sourceCode} className="btn" target="_blank">Código Fonte</a></li>
          {
            project.liveUrl !== null ?
              <li><a href={project.liveUrl} className="btn" target="_blank">Página</a></li> :
              null
          }
        </ul>
      </div>

    </article>
  )
}

export default Project