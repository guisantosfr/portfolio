'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#030d1f] py-12 px-6 flex flex-col items-center gap-8">
      <h3 className="font-semibold text-2xl">Guilherme Santos · Desenvolvedor</h3>

      <div className="flex items-center gap-4 animate-fade-up delay-500">
        <Button asChild variant="outline" size="icon" className="w-16 h-16 rounded-xl border-[#3a91f0]/20 text-[#8ab4d8] bg-[#1255b3]/10 hover:text-[#00d4ff] hover:border-[#00d4ff] hover:bg-[#00d4ff]/10 transition-all">
          <a href="https://wa.me/5586988775657" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </a>
        </Button>
        <Button asChild variant="outline" size="icon" className="w-16 h-16 rounded-xl border-[#3a91f0]/20 text-[#8ab4d8] bg-[#1255b3]/10 hover:text-[#00d4ff] hover:border-[#00d4ff] hover:bg-[#00d4ff]/10 transition-all">
          <a href="https://linkedin.com/in/guisantosfr" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </Button>
        <Button asChild variant="outline" size="icon" className="w-16 h-16 rounded-xl border-[#3a91f0]/20 text-[#8ab4d8] bg-[#1255b3]/10 hover:text-[#00d4ff] hover:border-[#00d4ff] hover:bg-[#00d4ff]/10 transition-all">
          <a href="https://github.com/guisantosfr" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </Button>
      </div>

      <div className="flex flex-col items-center gap-4">
        <p className="text-lg text-[#8ab4d8]">© Guilherme Santos · {new Date().getFullYear()} - Todos os direitos reservados</p>
        <Button
          variant="ghost"
          className="font-mono text-[#3a91f0] hover:text-[#00d4ff] flex items-center gap-1.5 transition-colors group cursor-pointer hover:bg-transparent"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <FontAwesomeIcon icon={faChevronUp} size='lg' />
          Voltar ao topo

        </Button>
      </div>
    </footer>

  )
}