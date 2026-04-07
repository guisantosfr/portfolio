import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export type Experience = {
  id: number;
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
}

interface ExperienceCardProps {
  exp: Experience;
}

export function ExperienceCard({ exp }: ExperienceCardProps) {
  return (
    <Card className="relative bg-[#071a3a]/60 border-[#3a91f0]/20 rounded-xl p-8 pl-10 transition-all duration-300 hover:-translate-y-1 hover:border-[#3a91f0]/45 hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)] overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#00d4ff] to-[#1e6fd4]" />

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
        <div>
          <h4 className="text-2xl font-bold text-[#00d4ff]">{exp.role}</h4>
          <p className="text-lg text-white font-medium mt-1">{exp.company}</p>
        </div>
        <Badge variant="secondary" className="font-mono text-[#00d4ff] bg-[#00d4ff]/20 p-3 rounded-full mt-2 sm:mt-0 w-fit border border-transparent">
          {exp.period}
        </Badge>
      </div>
      <ul className="list-disc list-inside text-[#8ab4d8] space-y-3 marker:text-[#00d4ff]">
        {exp.responsibilities.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>
    </Card>
  )
}
