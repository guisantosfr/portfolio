import { ProjectCard } from "./project-card"
import { projects } from "../_data/projects"

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 px-8 md:px-20 py-20 bg-[#071a3a]/25">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-14 tracking-tight">
        Meus <span className="text-[#00d4ff]">Projetos</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-[95%] mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}