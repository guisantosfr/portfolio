import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { aboutData } from "../_data/about"

export default function About() {
  return (
    <section id="about" className="relative z-10 px-8 md:px-20 py-20">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-14 tracking-tight">
        Sobre <span className="text-[#00d4ff]">Mim</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <Card className="bg-[#071a3a]/85 border-[#3a91f0]/20 rounded-2xl p-8 backdrop-blur-md transition-all duration-300 hover:border-[#3a91f0]/45">
          <h3 className="text-3xl font-bold mb-4 text-white">Quem sou eu</h3>
          <div className="space-y-4 text-[#8ab4d8] text-xl leading-relaxed">
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
              <Card key={exp.id} className="bg-[#071a3a]/60 border-[#3a91f0]/20 rounded-xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#3a91f0]/45 hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)]">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                  <div>
                    <h4 className="text-3xl font-bold text-[#00d4ff]">{exp.role}</h4>
                    <p className="text-xl text-white font-medium mt-1">{exp.company}</p>
                  </div>
                  <Badge variant="secondary" className="font-mono text-lg text-[#8ab4d8] bg-[#1255b3]/20 p-3 rounded-full mt-2 sm:mt-0 w-fit hover:bg-[#1255b3]/20 border border-transparent">
                    {exp.period}
                  </Badge>
                </div>
                <ul className="list-disc list-inside text-xl text-[#8ab4d8] space-y-3 marker:text-[#3a91f0]">
                  {exp.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </Card>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}