import { Project } from '@/types/project';

//import vueEcommerceMockup from '@/assets/vue-ecommerce.png';
import nextStoreMockup from '@/assets/next-store.png';
import whereInTheWorldMockup from '@/assets/where-in-the-world.png';
import engajaEduMockup from '@/assets/engaja-edu.png';
//import ipAddressTrackerMockup from '@/assets/ip-address-tracker.png';
import barberSaaSMockup from '@/assets/barber-saas.png';

const projects: Project[] = [
  {
    id: 1,
    name: 'Engaja Edu',
    description: 'Aplicação multiplataforma web e mobile desenvolvida para promover engajamento de estudantes em sala de aula.',
    sourceCode: 'https://github.com/guisantosfr/engajamento-teacher-web',
    liveUrl: 'https://engaja-edu.vercel.app/',
    img: engajaEduMockup
  },
  {
    id: 2,
    name: 'FSW Barber',
    description: 'Aplicação web fullstack para gerenciamento de barbearias, com autenticação Google e agendamento de serviços.',
    sourceCode: 'https://github.com/guisantosfr/fsw-barber',
    liveUrl: 'https://barber-saas-guisantosfr.vercel.app/',
    img: barberSaaSMockup
  },
  {
    id: 3,
    name: 'Next Store',
    description: 'Protótipo de aplicação de e-commerce desenvolvido com Nextjs.',
    sourceCode: 'https://github.com/guisantosfr/next-store',
    liveUrl: 'https://next-store-guisantosfr.vercel.app/',
    img: nextStoreMockup
  },
  // {
  //   id: 3,
  //   name: 'IP Address Tracker',
  //   description: 'Desafio nível intermediário do Frontend Mentor. Desenvolvido com React e TypeScript.',
  //   sourceCode: 'https://github.com/guisantosfr/ip-address-tracker',
  //   liveUrl: 'https://ip-address-tracker-guisantosfr.vercel.app/',
  //   img: ipAddressTrackerMockup
  // },
  {
    id: 4,
    name: 'Where in the world',
    description: 'Desafio nível avançado do Frontend Mentor desenvolvido com Vue.js.',
    sourceCode: 'https://github.com/guisantosfr/where-in-the-world',
    liveUrl: 'https://where-in-the-world-brown.vercel.app/',
    img: whereInTheWorldMockup
  }
]

export default projects