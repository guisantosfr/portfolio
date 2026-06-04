export const projects = [
    {
        id: 'notasmart',
        title: 'NotaSmart',
        description: "Aplicativo de lista de compras com captura inteligente para ler produtos de uma nota fiscal usando IA",
        images: [
            '/projects/nota-smart-mockup.png'
        ],
        tags: ['Backend', 'Fastify', 'Mobile', 'React Native', 'Inteligência Artificial'],
        githubBackend: null,
        githubFrontend: null,
        githubMobile: 'https://github.com/guisantosfr/nota-smart',
        deployUrl: null,
    },
    {
        id: 'engagequiz',
        title: 'EngageQuiz',
        description: 'MVP de aplicação multiplataforma para criação e aplicação de questionários em tempo real.',
        images: [
            '/projects/engage-quiz-web-mockup.png',
            '/projects/engage-quiz-mobile-mockup.png',
            '/projects/engage-quiz-lobby-mockup.png',
            '/projects/engage-quiz-results-mockup.png',
            '/projects/engage-quiz-podium-mockup.png',
        ],
        tags: ['Backend', 'Web', 'Mobile', 'Nest.js', 'Next.js', 'React Native', 'Inteligência Artificial'],
        githubBackend: 'https://github.com/guisantosfr/engage-quiz-backend',
        githubFrontend: 'https://github.com/guisantosfr/engage-quiz-teacher',
        githubMobile: 'https://github.com/guisantosfr/engage-quiz-student',
        deployUrl: 'https://engage-quiz-teacher-guisantosfr.vercel.app/',
    },
    {
        id: 'fsw-barber',
        title: 'FSW Barber',
        description: 'SaaS fullstack para gerenciamento de barbearias, com autenticação Google e agendamento de serviços.',
        images: [
            '/projects/fsw-barber-mockup.png',
            '/projects/fsw-barber-sidebar-mockup.png',
            '/projects/fsw-barber-barbershop-mockup.png'
        ],
        tags: ['Web', 'Next.js', 'Prisma', 'Google Auth'],
        githubBackend: null,
        githubFrontend: 'https://github.com/guisantosfr/fsw-barber',
        githubMobile: null,
        deployUrl: 'https://barber-saas-guisantosfr.vercel.app/',
    },
    {
        id: 'app-agendamentos',
        title: 'App Agendamentos',
        description: 'Aplicativo mobile React Native para agendamentos, desenvolvido como teste técnico.',
        images: [
            '/projects/scheduling-app-mockup-1.png',
            '/projects/scheduling-app-mockup-2.png',
            '/projects/scheduling-app-mockup-3.png'
        ],
        tags: ['Mobile', 'React Native'],
        githubBackend: null,
        githubFrontend: null,
        githubMobile: 'https://github.com/guisantosfr/medclub-teste',
        deployUrl: null,
    },
    {
        id: 'ecommerce',
        title: 'E-commerce',
        description: 'Protótipo de e-commerce desenvolvido com Vue.js',
        images: ['/projects/vue-ecommerce-mockup.png'],
        tags: ['Web', 'Vue.js'],
        githubBackend: null,
        githubFrontend: 'https://github.com/guisantosfr/vue-ecommerce',
        githubMobile: null,
        deployUrl: 'https://vue-ecommerce-guisantosfr.vercel.app/',
    }
];
