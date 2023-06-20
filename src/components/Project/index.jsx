import './styles.css'

function Project({ project, index } ){
  const isOdd = index % 2 !== 0

  return(
    <article className={isOdd ? 'reverse' : null}>
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
            <li><a href={`/project/${project.id}`} className="btn">Ver mais</a></li>
          </ul>
        </div>

        <img src={project.img} alt={`Screenshot of ${project.name}`} loading="lazy" />
      </article>
  )
}

export default Project