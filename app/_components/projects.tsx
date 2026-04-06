'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
//import AutoPlay from 'embla-carousel-autoplay';
import { projects } from "../_data/projects"

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 px-8 md:px-20 py-20 bg-[#071a3a]/25">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-14 tracking-tight">
        Meus <span className="text-[#00d4ff]">Projetos</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-[95%] mx-auto">
        {projects.map((project) => (
          <Card key={project.id} className="bg-[#071a3a]/85 border-[#3a91f0]/20 rounded-2xl overflow-hidden p-0 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-[#3a91f0]/45 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_0_1px_rgba(58,145,240,0.1)] backdrop-blur-md">
            <div className="relative bg-[#0a2756] overflow-hidden group/image">
              {project.images.length > 1 ? (
                <Carousel className="w-full h-full" opts={{ loop: true }} 
                //plugins={[AutoPlay({ delay: 3000 })]}
                >
                  <CarouselContent className="h-full ml-0">
                    {project.images.map((img, idx) => (
                      <CarouselItem key={idx} className="h-full relative pl-0">
                        <img src={img} alt={`${project.title} screenshot ${idx + 1}`} className="w-full h-full object-cover" />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="w-12 h-12 absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover/image:opacity-100 transition-opacity bg-black/50 border-none text-white hover:bg-black/80" />
                  <CarouselNext className="w-12 h-12 absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover/image:opacity-100 transition-opacity bg-black/50 border-none text-white hover:bg-black/80" />
                </Carousel>
              ) : (
                <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover" />
              )}
            </div>
            <CardContent className="p-6 flex-1 flex flex-col">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <Badge key={tag} variant="outline" className="font-mono text-md p-3 rounded bg-[#1255b3]/25 text-[#7bbcf8] border-[#1255b3]/40">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h3 className="text-xl text-white font-bold mb-2">{project.title}</h3>
              <p className="text-lg text-[#8ab4d8] leading-relaxed flex-1">
                {project.description}
              </p>
              <div className="flex gap-3 mt-4 flex-wrap">
                <Button asChild variant="outline" className="flex items-center gap-2 px-6 py-3 text-lg rounded-lg bg-transparent text-[#00d4ff] border-2 border-[#00d4ff] hover:bg-[#00d4ff]/10 hover:-translate-y-0.5 transition-all font-semibold">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} /> Código
                  </a>
                </Button>
                <Button asChild className="flex items-center gap-2 px-6 py-3 text-lg rounded-lg bg-[#1e6fd4] text-white hover:bg-[#3a91f0] hover:-translate-y-0.5 transition-all font-semibold">
                  <a href={project.deployUrl} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Deploy
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}