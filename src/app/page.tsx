import Footer from "@/components/Footer";
import Gradient from "@/components/Gradient";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Techs from "@/components/Techs";

import projectData from '@/utils/projectData';
import { mainTechs, secondaryTechs } from "@/utils/techs";

export default function Home() {
  return (
    <div>
      <Header />
      <Gradient />
      <Intro />
      <Gradient />
      <Projects projects={projectData}/>
      <Gradient />
      <Techs mainTechs={mainTechs} secondaryTechs={secondaryTechs} />
      <Gradient />
      <Footer />
    </div>
  );
}
