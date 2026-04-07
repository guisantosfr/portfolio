import { Card } from "@/components/ui/card"
import { aboutData } from "../_data/about"
import { ExperienceCard, type Experience } from "./experience-card"

export default function About() {
  return (
    <section id="about" className="relative z-10 px-8 md:px-20 py-20">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-14 tracking-tight">
        Sobre <span className="text-[#00d4ff]">Mim</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <Card className="bg-[#071a3a]/85 border-[#3a91f0]/20 rounded-2xl p-8 backdrop-blur-md transition-all duration-300 hover:border-[#3a91f0]/45">
          <h3 className="text-2xl font-bold mb-4 text-white">Quem sou eu</h3>
          <div className="space-y-4 text-[#8ab4d8] text-lg leading-relaxed">
            {aboutData.aboutMe.map((paragraph, index) => {
              const formattedText = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
              return <p key={index} dangerouslySetInnerHTML={{ __html: formattedText }} />
            })}
          </div>
        </Card>

        <div className="flex flex-col">
          <h3 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
            Experiências
          </h3>

          <div className="space-y-6">

            {aboutData.experiences.map((exp) => (
              <ExperienceCard key={exp.id} exp={exp as Experience} />
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}