import { Tech } from '@/types/tech';
import html5 from '../assets/skills/html5.svg';
import Image from 'next/image';

export default function Techs({ mainTechs, secondaryTechs }: { mainTechs: Tech[]; secondaryTechs: Tech[] }) {
    return (
      <section id="skills" className="bg-[#0d224b]">
        <div className="max-w-md sm:max-w-lg mx-auto text-center py-12">
          <h2 className="text-2xl sm:text-4xl">Tecnologias Principais</h2>

          {/* <div className="flex mt-3">
            <div className="w-25 gap-3 p-3 bg-[#1061e3]">
              <Image src={html5} alt="HTML5" />
            </div>
          </div> */}
  
          <p className="mt-3 mb-8 text-xl">
            {mainTechs.join(" | ")}
          </p>
  
          <h3 className="text-2xl sm:text-4xl">Outras Tecnologias</h3>
  
          <p className="mt-3 mb-8 text-xl">
            {secondaryTechs.join(" | ")}
          </p>
        </div>
      </section>
    )
}
