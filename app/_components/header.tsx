export default function Header() {
    const links = [
        {
            name: "Sobre Mim",
            href: "#about"
        },
        {
            name: "Projetos",
            href: "#projects"
        },
        {
            name: "Habilidades",
            href: "#skills"
        },

    ]

    return (
        <header className="sticky top-0 z-50 flex items-center justify-between p-10 md:px-20 md:py-12 h-17 bg-[#030d1f]/80 backdrop-blur-xl border-b border-[#3a91f0]/20">
            <span className="text-white">GS</span>

            <nav className="hidden md:flex items-center gap-12">
                {links.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className="text-lg font-semibold tracking-wide uppercase text-[#8ab4d8] hover:text-white transition-colors relative group"
                    >
                        {item.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#00d4ff] transition-all group-hover:w-full"></span>
                    </a>
                ))}
            </nav>
        </header>
    )
}