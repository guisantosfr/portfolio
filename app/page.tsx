import About from "./_components/about";
import Divider from "./_components/divider";
import Footer from "./_components/footer";
import Header from "./_components/header";
import Hero from "./_components/hero";
import Projects from "./_components/projects";
import Skills from "./_components/skills";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#030d1f] text-[#f0f8ff] font-sans selection:bg-[#1e6fd4] selection:text-white">
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollLine {
          0% { opacity: 0; transform: scaleY(0); transform-origin: top; }
          50% { opacity: 1; transform: scaleY(1); }
          100% { opacity: 0; transform: scaleY(1); transform-origin: bottom; }
        }
        .animate-fade-up { animation: fadeUp 0.6s forwards; opacity: 0; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.35s; }
        .delay-400 { animation-delay: 0.45s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-900 { animation-delay: 0.9s; }
        .delay-1200 { animation-delay: 1.2s; }
        .animate-scroll-line { animation: scrollLine 1.5s 1.5s infinite; }
      `}} />

      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-45"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")` }}
      />

      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 20% 10%, rgba(18, 85, 179, 0.35) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 85% 80%, rgba(0, 212, 255, 0.12) 0%, transparent 55%), radial-gradient(ellipse 40% 40% at 60% 40%, rgba(13, 58, 122, 0.25) 0%, transparent 60%)' }}
      />

      <Header />

      <Hero />

      <About />
      
      <Divider />

      <Projects />

      <Divider />

      <Skills />

      <Divider />

      <Footer />

    </div>
  )
}