import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
 
//import './styles.css'

export default function Header() {
  return (
    <nav className="font-mono text-[90%] py-12 px-4 md:px-8 lg:px-12 lg:max-w-screen-xl lg:mx-auto">
      <ul className="list-none p-0 m-0 flex flex-wrap justify-center items-center gap-9">
        <li className="w-full text-center lg:w-auto lg:text-left lg:mr-auto">
          <h1>
            <Link href="/" className="font-sans text-white no-underline block hover:text-[#1061e3] text-[150%]">
              <FontAwesomeIcon icon={faLaptopCode} aria-hidden="true" className='mr-2' />
              <span className='text-white'>Guilherme Santos</span>
            </Link>
          </h1>
        </li>

        <li>
          <Link href="https://api.whatsapp.com/send?phone=5586988775657" target="_blank" className="text-white no-underline block hover:text-[#1061e3]">
            <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" className='mr-2 text-[175%] text-[#86fbfb] hover:text-[#1061e3]' title="Whatsapp" />
            <span className="sr-only">Whatsapp</span>
          </Link>
        </li>

        <li>
          <Link href="https://www.linkedin.com/in/guisantosfr" target="_blank" className="text-white no-underline block hover:text-[#1061e3]">
            <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" className='mr-2 text-[175%] text-[#86fbfb] hover:text-[#1061e3]' title="Linkedin"/>
            <span className="sr-only">LinkedIn</span>
          </Link>
        </li>

        <li>
          <Link href="https://www.github.com/guisantosfr" target="_blank" className="text-white no-underline block hover:text-[#1061e3]">
            <FontAwesomeIcon icon={faGithubSquare} aria-hidden="true" className='mr-2 text-[175%] text-[#86fbfb] hover:text-[#1061e3]' title="Github" />
            <span className="sr-only">Github</span>
          </Link>
        </li>

        <li>
          <Link href="mailto:santosgui678@gmail.com" target="_blank" className="text-white no-underline block hover:text-[#1061e3]">
            <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" className='mr-2 text-[175%] text-[#86fbfb] hover:text-[#1061e3]' title="Email" />
            <span className="sr-only">Email</span>
          </Link>
        </li>

        <li>
          <Link href="https://drive.google.com/file/d/1JL1u2eWsARiTx12bamOMfrCgGfCEe3Jq/view?usp=sharing" target="_blank" className="text-white no-underline block hover:text-[#1061e3]">
            <FontAwesomeIcon icon={faFile} aria-hidden="true" className='mr-2 text-[175%] text-[#86fbfb] hover:text-[#1061e3]' title="Currículo"/>
            <span className="sr-only">Currículo</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}