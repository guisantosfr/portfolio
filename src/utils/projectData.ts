import { Project } from '@/types/project';

import vueEcommerceMockup from '@/assets/vue-ecommerce.png';
import whereInTheWorldMockup from '@/assets/where-in-the-world.png';
import engajaEduMockup from '@/assets/engaja-edu.png';
import ipAddressTrackerMockup from '@/assets/ip-address-tracker.png';

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
    name: 'Vue e-commerce',
    description: 'Protótipo de aplicação de e-commerce desenvolvido com Vue.js.',
    sourceCode: 'https://github.com/guisantosfr/vue-ecommerce',
    liveUrl: 'https://vue-ecommerce-guisantosfr.vercel.app/',
    img: vueEcommerceMockup
  },
  {
    id: 3,
    name: 'IP Address Tracker',
    description: 'Desafio nível intermediário do Frontend Mentor. Desenvolvido com React e TypeScript.',
    sourceCode: 'https://github.com/guisantosfr/ip-address-tracker',
    liveUrl: 'https://ip-address-tracker-guisantosfr.vercel.app/',
    img: ipAddressTrackerMockup
  },
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