import Header from './components/Header'
import Gradient from './components/Gradient'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Contact from './components/Contact'
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
      <Contact/>
      <Gradient/>
      <Footer/>
    </>
  )
}

export default App
