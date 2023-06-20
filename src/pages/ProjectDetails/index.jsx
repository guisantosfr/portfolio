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

      <h2>Project : { project.name }</h2>


      <Gradient/>
      <Footer/>
    </>
  )
}

export default ProjectDetails