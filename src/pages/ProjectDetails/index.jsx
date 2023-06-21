import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Footer from '../../components/Footer'
import Gradient from '../../components/Gradient'
import Header from '../../components/Header'

import projects from '../../projects'

import './styles.css'

function ProjectDetails(){
  const { id } = useParams()

  const [project, setProject] = useState({})

  useEffect(() => {
    const projectFound = projects.find(project => project.id === Number.parseInt(id))
    setProject(projectFound)
  }, [])

  return(
    <>
      <Header/>
      <Gradient/>

      <section className='project__details'>
        <h2>{ project.name }</h2>

        <img src={project.img} alt={`Screenshot of ${project.name}`} loading="lazy" />

        <p>{project.description}</p>

        <ul>
            <li><a href={project.sourceCode} className="btn" target="_blank">Código</a></li>
            {
              project.liveUrl !== null ?
                <li><a href={project.liveUrl} className="btn" target="_blank">Página</a></li> :
                null
            }
            {
              project.linkedinPost !== null ?
                <li><a href={project.linkedinPost} className="btn" target="_blank">Linkedin Post</a></li> :
                null
            }
        </ul>

        <h3>Tecnologias utilizadas</h3>

        <ul>
          {project.techs?.map(tech => <li key={tech}>{tech}</li>)}
        </ul>

      </section>



      <Gradient/>
      <Footer/>
    </>
  )
}

export default ProjectDetails