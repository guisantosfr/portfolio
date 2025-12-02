import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Gradient from "@/components/Gradient";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

import projectData from '@/utils/projectData';

export default function Home() {
  return (
    <div>
      <Header />
      <Gradient />
      <Intro />
      <Gradient />
      <Projects projects={projectData}/>
      <Gradient />
      <Skills />
      <Gradient />
      <ContactForm />
      <Gradient />
      <Footer />
    </div>
  );
}
