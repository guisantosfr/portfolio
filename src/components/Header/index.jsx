import { Link } from 'react-router-dom'

import resume from '../../assets/Curriculo_GS.pdf'

import './styles.css'

function Header(){
  return(
    <nav>
    <ul>
      <li>
        <h1>
          <Link to="/">
            <span className="fa-solid fa-laptop-code" aria-hidden="true"></span>
            <span>Guilherme Santos</span>
          </Link>
        </h1>
      </li>

      <li><Link to="/about">Sobre</Link></li>

      <li>
        <Link to="https://www.linkedin.com/in/guisantosfr" target="_blank">
          <span className="fa-brands fa-linkedin" aria-hidden="true"></span>
          <span className="sr-only">LinkedIn</span>
        </Link>
      </li>

      <li>
        <Link to="https://www.github.com/guisantosfr" target="_blank">
          <span className="fa-brands fa-git-square" aria-hidden="true"></span>
          <span className="sr-only">Github</span>
        </Link>
      </li>

      <li>
        <Link to={resume} className="btn" target="_blank">Currículo</Link>
      </li>
    </ul>
  </nav>
  )
}

export default Header