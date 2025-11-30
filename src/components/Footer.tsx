'use client'

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="text-center py-16 px-4">
      <h2 className='text-2xl sm:text-3xl'>Guilherme Santos &middot; Desenvolvedor</h2>

      <ul className="list-none my-6 p-0 flex flex-wrap justify-center items-center gap-8 text-4xl">
        <li>
          <Link href="https://api.whatsapp.com/send?phone=5586988775657" target="_blank">
          <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" className='mr-2 text-[#1061e3] hover:text-[#19aafe]' aria-label="Whatsapp" />
            <span className="sr-only">Whatsapp</span>
          </Link>
        </li>

        <li>
          <Link href="https://www.linkedin.com/in/guisantosfr" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" className='mr-2 text-[#1061e3] hover:text-[#19aafe]' aria-label="Linkedin"/>
            <span className="sr-only">LinkedIn</span>
          </Link>
        </li>

        <li>
          <Link href="https://www.github.com/guisantosfr" target="_blank">
            <FontAwesomeIcon icon={faGithubSquare} aria-hidden="true" className='mr-2 text-[#1061e3] hover:text-[#19aafe]' aria-label="Github" />
            <span className="sr-only">Github</span>
          </Link>
        </li>
      </ul>

      <p className='text-2xl'><small>&copy; Guilherme Santos - {new Date().getFullYear()} - Todos os direitos reservados.</small></p>

      <p 
        className="cursor-pointer mt-2 mb-0 hover:opacity-70"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
        }}
      >
        Voltar ao topo
      </p>
    </footer>
  )
}