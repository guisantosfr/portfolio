import { Link } from 'react-router-dom'
import './styles.css'

function Footer() {
  return (
    <footer>
      <h2>Guilherme Santos &middot; Desenvolvedor</h2>

      <ul>
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
          <Link to="mailto:santosgui678@gmail.com" target="_blank">
            <span className="fa-solid fa-envelope" aria-hidden="true"></span>
            <span className="sr-only">Email</span>
          </Link>
        </li>
        <li>
          <Link to="https://api.whatsapp.com/send?phone=5586988775657" target="_blank">
            <span className="fa-brands fa-whatsapp" aria-hidden="true"></span>
            <span className="sr-only">Whatsapp</span>
          </Link>
        </li>
      </ul>

      <p><small>&copy; 2023 Guilherme Santos. Todos os direitos reservados.</small></p>

      <p className="back-to-top" onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }}>Voltar ao topo</p>
    </footer>
  )
}

export default Footer