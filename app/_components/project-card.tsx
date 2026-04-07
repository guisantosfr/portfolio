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

export type Project = {
  id: string;
  title: string;
  description: string;
  images: string[];
  tags: string[];
  githubBackend: string | null;
  githubFrontend: string | null;
  githubMobile: string | null;
  deployUrl: string | null;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="bg-[#071a3a]/85 border-[#3a91f0]/20 rounded-2xl overflow-hidden p-0 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-[#3a91f0]/45 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_0_1px_rgba(58,145,240,0.1)] backdrop-blur-md">
      <div className="relative bg-[#0a2756] overflow-hidden group/image">
        {project.images.length > 1 ? (
          <Carousel className="w-full h-full" opts={{ loop: true }}>
            <CarouselContent className="h-full ml-0">
              {project.images.map((img, idx) => (
                <CarouselItem key={idx} className="h-full relative pl-0 overflow-hidden">
                  <img src={img} alt={`${project.title} screenshot ${idx + 1}`} className="w-full h-full object-cover scale-110" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="w-10 h-10 absolute left-4 top-1/2 -translate-y-1/2 border-none text-white bg-black/80" />
            <CarouselNext className="w-10 h-10 absolute right-4 top-1/2 -translate-y-1/2 border-none text-white bg-black/80" />
          </Carousel>
        ) : (
          <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover scale-110" />
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
        <h3 className="text-lg text-white font-bold mb-2">{project.title}</h3>
        <p className="text-lg text-[#8ab4d8] leading-relaxed flex-1">
          {project.description}
        </p>
        <div className="flex gap-3 mt-6 flex-wrap">
          {project.githubBackend && (
            <Button asChild variant="outline" className="flex items-center gap-2 p-4 text-lg rounded-lg bg-transparent text-[#00d4ff] border-2 border-[#00d4ff] hover:bg-[#00d4ff]/10 hover:-translate-y-0.5 transition-all font-semibold">
              <a href={project.githubBackend} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} /> Backend
              </a>
            </Button>
          )}
          {project.githubFrontend && (
            <Button asChild variant="outline" className="flex items-center gap-2 p-4 text-lg rounded-lg bg-transparent text-[#00d4ff] border-2 border-[#00d4ff] hover:bg-[#00d4ff]/10 hover:-translate-y-0.5 transition-all font-semibold">
              <a href={project.githubFrontend} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} /> Frontend
              </a>
            </Button>
          )}
          {project.githubMobile && (
            <Button asChild variant="outline" className="flex items-center gap-2 p-4 text-lg rounded-lg bg-transparent text-[#00d4ff] border-2 border-[#00d4ff] hover:bg-[#00d4ff]/10 hover:-translate-y-0.5 transition-all font-semibold">
              <a href={project.githubMobile} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} /> Mobile
              </a>
            </Button>
          )}
          {project.deployUrl && (
            <Button asChild className="flex items-center gap-2 p-4 text-lg rounded-lg bg-[#1e6fd4] text-white hover:bg-[#3a91f0] hover:-translate-y-0.5 transition-all font-semibold">
              <a href={project.deployUrl} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Deploy
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
