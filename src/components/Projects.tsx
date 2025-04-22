import { Project } from "@/types/project"
import ProjectInfo from "./ProjectInfo"

export default function Projects({ projects }: { projects: Array<Project> }) {
    return (
      <section id="projects" className="bg-[#103550] py-12 px-10 sm:px-20">
        <h2 className="text-3xl sm:text-5xl mb-8">Meus projetos</h2>
        
        <div className="md:grid md:grid-cols-2 md:gap-8 max-w-screen-xl mx-auto">
          {
            projects.map((project) => <ProjectInfo key={project.id} project={project} />)
          }
        </div>
      </section>
    )
  }