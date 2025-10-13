export default function Intro() {
    return (
      <section className="py-36 px-4 pb-40 max-w-screen-xl mx-auto text-center">
        <p className="text-2xl font-mono leading-relaxed">
            Oi, eu sou
            <span className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-[#86fbfb] block max-w-[70%] sm:max-w-[50%] mx-auto my-5 overflow-hidden whitespace-nowrap md:border-r-4 md:border-blue-400 animate-typing">
                Guilherme Santos.
            </span>
        </p>
  
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal">Fullstack Developer</h2>
  
        <p className="text-lg sm:text-xl md:text-2xl leading-relaxed mt-5">Desenvolvedor fullstack com experiência acadêmica e profissional.<br />
        Atualmente atuando no <a href="https://achemed.com.br/" target='_blank' className="text-[#1061e3]">Achemed</a>.</p>
      </section>
    )
  }