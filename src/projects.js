import vueEcommerceMockup from './assets/vue-ecommerce.png';
import whereInTheWorldMockup from './assets/where-in-the-world.png';
import loopstudiosMockup from './assets/loopstudios.png';
import minhaCarteiraMockup from './assets/minha-carteira.gif';

const projects = [
  {
    id: 1,
    name: 'Vue e-commerce',
    description: 'Protótipo de e-commerce desenvolvido com Vue.js.',
    sourceCode: 'https://github.com/guisantosfr/vue-ecommerce',
    liveUrl: 'https://vue-ecommerce-guisantosfr.vercel.app/',
    img: vueEcommerceMockup
  },
  {
    id: 2,
    name: 'Where in the world',
    description: 'Desafio nível avançado do Frontend Mentor desenvolvido com Vue.js.',
    sourceCode: 'https://github.com/guisantosfr/where-in-the-world',
    liveUrl: 'https://where-in-the-world-brown.vercel.app/',
    img: whereInTheWorldMockup
  },
  {
    id: 3,
    name: 'Loopstudios Landing Page',
    description: 'Desafio nível júnior do Frontend Mentor. Desenvovido com with HTML, SASS e abordagem Mobile-First.',
    sourceCode: 'https://github.com/guisantosfr/Loopstudios-landing-page',
    liveUrl: 'https://guisantosfr.github.io/Loopstudios-landing-page/',
    img: loopstudiosMockup
  },
  {
    id: 4,
    name: 'Minha carteira',
    description: 'Dashboard desenvolvido com ReactJs, Typescript e Styled Components',
    sourceCode: 'https://github.com/guisantosfr/minha-carteira',
    liveUrl: 'https://minha-carteira-zeta.vercel.app/',
    img: minhaCarteiraMockup
  }
]

export default projects