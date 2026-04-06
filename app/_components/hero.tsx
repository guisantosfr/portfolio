'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@/components/ui/button';
import { aboutData } from '../_data/about';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = aboutData.name;

  useEffect(() => {
    const timeout = setTimeout(() => {
      let index = 0;
      const timer = setInterval(() => {
        setText(fullText.slice(0, index + 1));
        index++;
        if (index >= fullText.length) {
          clearInterval(timer);
        }
      }, 100);
      return () => clearInterval(timer);
    }, 0);

    return () => clearTimeout(timeout);
  }, []);

  const openCV = () => {
    window.open(aboutData.cvUrl, '_blank');
  }

  return (
    <section className="relative z-10 min-h-[calc(100vh-70px)] flex flex-col justify-center items-center px-6 py-20 text-center">
      <div className="font-mono text-sm md:text-sm font-semibold text-[#00d4ff] tracking-widest uppercase mb-6 flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#00d4ff]/20 bg-[#00d4ff]/10 animate-fade-up delay-200 backdrop-blur-sm shadow-[0_0_15px_rgba(0,212,255,0.15)]">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00d4ff] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00d4ff]"></span>
        </span>
        Disponível para projetos
      </div>
      <p className="text-2xl md:text-5xl font-normal text-[#8ab4d8] my-4 animate-fade-up delay-300">
        Oi, eu sou
      </p>
      <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-bold leading-none text-[#00d4ff] tracking-tight mb-8 animate-fade-up delay-400 relative inline-flex justify-center">
        <span className="invisible">{fullText}</span>
        <span className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
          {text}
          {/* <span className="animate-pulse">|</span> */}
        </span>
      </h1>

      <div className="flex items-center gap-5 mb-12 animate-fade-up delay-500">
        <Button asChild variant="outline" size="icon" className="w-16 h-16 rounded-xl border-[#3a91f0]/20 text-[#8ab4d8] bg-[#1255b3]/10 hover:text-[#00d4ff] hover:border-[#00d4ff] hover:bg-[#00d4ff]/10 transition-all">
          <a href={aboutData.socialLinks.whatsapp} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </a>
        </Button>
        <Button asChild variant="outline" size="icon" className="w-16 h-16 rounded-xl border-[#3a91f0]/20 text-[#8ab4d8] bg-[#1255b3]/10 hover:text-[#00d4ff] hover:border-[#00d4ff] hover:bg-[#00d4ff]/10 transition-all">
          <a href={aboutData.socialLinks.linkedin} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </Button>
        <Button asChild variant="outline" size="icon" className="w-16 h-16 rounded-xl border-[#3a91f0]/20 text-[#8ab4d8] bg-[#1255b3]/10 hover:text-[#00d4ff] hover:border-[#00d4ff] hover:bg-[#00d4ff]/10 transition-all">
          <a href={aboutData.socialLinks.github} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </Button>
      </div>

      <div className="animate-fade-up delay-900">
        <Button
          className="gap-2 px-8 py-6 rounded-xl bg-[#1e6fd4] text-white font-bold tracking-wide transition-all hover:bg-[#3a91f0] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(30,111,212,0.35)] text-xl"
          onClick={openCV}>
          <FontAwesomeIcon icon={faFile} size="lg" />
          Ver Currículo

        </Button>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#8ab4d8] text-xs tracking-widest uppercase animate-fade-up delay-1200">
        <span>scroll</span>
        <div className="w-1 h-10 bg-linear-to-b from-[#1e6fd4] to-transparent animate-scroll-line origin-top"></div>
      </div>
    </section>
  )
}