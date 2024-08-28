import { Link } from 'react-router-dom'

import './styles.css'

function Header() {
  return (
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

        <li>
          <Link to="https://api.whatsapp.com/send?phone=5586988775657" target="_blank">
            <span className="fa-brands fa-whatsapp" title="Whatsapp" aria-hidden="true"></span>
            <span className="sr-only">Whatsapp</span>
          </Link>
        </li>

        <li>
          <Link to="https://www.linkedin.com/in/guisantosfr" target="_blank">
            <span className="fa-brands fa-linkedin" title="Linkedin" aria-hidden="true"></span>
            <span className="sr-only">LinkedIn</span>
          </Link>
        </li>

        <li>
          <Link to="https://www.github.com/guisantosfr" target="_blank">
            <span className="fa-brands fa-git-square" title="Github" aria-hidden="true"></span>
            <span className="sr-only">Github</span>
          </Link>
        </li>

        <li>
          <Link to="mailto:santosgui678@gmail.com" target="_blank">
            <span className="fa-solid fa-envelope" title="Email" aria-hidden="true"></span>
            <span className="sr-only">Email</span>
          </Link>
        </li>

        <li>
          <Link to="https://drive.google.com/file/d/1j12xme7VHbfSKTdTFc0AuPJ1NiULn7Ft/view?usp=sharing" target="_blank">
            <span className="fa-solid fa-file" title="Currículo" aria-hidden="true"></span>
            <span className="sr-only">Currículo</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header