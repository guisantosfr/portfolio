import { Tech } from '@/types/tech';

export default function Techs({ mainTechs, secondaryTechs }: { mainTechs: Tech[]; secondaryTechs: Tech[] }) {
    return (
      <section id="skills" className="bg-[#0d224b]">
        <div className="max-w-md sm:max-w-lg mx-auto text-center py-12">
          <h2 className="text-2xl sm:text-4xl">Tecnologias Principais</h2>
  
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
