import Header from './components/Header'
import Gradient from './components/Gradient'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Techs from './components/Techs'
import Footer from './components/Footer'

import projectsData from './projects'

function App() {
  return (
    <>
      <Header/>
      <Gradient/>
      <Intro/>
      <Gradient/>
      <Projects projects={projectsData}/>
      <Gradient/>
      <Techs/>
      <Gradient/>
      <Footer/>
    </>
  )
}

export default App
