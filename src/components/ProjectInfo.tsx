import { Project } from "@/types/project"
import Image from "next/image"

export default function ProjectInfo({ project }: { project: Project }) {
    return (
      <article>
        <Image
          src={project.img} 
          alt={`Screenshot of ${project.name}`} 
          loading="lazy"
          className="my-3 p-4" 
        />
  
        <div className="text">
          <h3 className="text-[#86fbfb] text-3xl">{project.name}</h3>
  
          <p className="bg-[#171321] text-white p-4 rounded-lg leading-relaxed my-5">
            {project.description}
          </p>
  
          <ul className="list-none p-0 m-0 flex flex-wrap justify-start gap-4 text-lg">
            <li><a href={project.sourceCode} className="btn" target="_blank">Código Fonte</a></li>
            {
              project.liveUrl !== null ?
                <li><a href={project.liveUrl} className="btn" target="_blank">Página</a></li> :
                null
            }
          </ul>
        </div>
      </article>
    )
  }