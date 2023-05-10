import Footer from '../../components/Footer'
import Gradient from '../../components/Gradient'
import Header from '../../components/Header'

import myData from '../../me'

import './styles.css'

function About(){
  return(
    <>
    <Header/>
    <Gradient/>

    <section className="about" id="about">
    <div className="container">
      <h2>Sobre mim</h2>

      <article>
        <div className="text">

          <p className="black-box">{ myData.description }</p>
          <h4>Habilidades principais:</h4>
          <ul>
            { myData.skills.map(skill => <li key={skill}>{skill}</li>) }
          </ul>
        </div>

        <img src={myData.profilePhoto} alt="Minha foto de perfil" className="profile" loading="lazy" />
      </article>

    </div>
    </section>

    <Gradient/>

    <Footer/>
    </>
  )
}

export default About