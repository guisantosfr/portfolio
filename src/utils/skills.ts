import Skill from '../types/skill';

import html5 from '../assets/skills/html5.svg';
import css3 from '../assets/skills/css3.svg';
import javascript from '../assets/skills/javascript.svg';
import typescript from '../assets/skills/typescript.svg';
import react from '../assets/skills/react.svg';
import nextjs from '../assets/skills/next-js.svg';
import vue from '../assets/skills/vue.svg';
import reactnative from '../assets/skills/react-native.svg';
import nodejs from '../assets/skills/node-js.svg';
import php from '../assets/skills/php.svg';
import laravel from '../assets/skills/laravel.svg';
import python from '../assets/skills/python.svg';
import java from '../assets/skills/java.svg';
import tailwind from '../assets/skills/tailwind.svg';
import materialui from '../assets/skills/material-ui.svg';
import bootstrap from '../assets/skills/bootstrap.svg';
import shadcn from '../assets/skills/shadcn-ui.svg';
import postgresql from '../assets/skills/postgresql.svg';
import mongodb from '../assets/skills/mongodb.svg';
import linux from '../assets/skills/linux.svg';
import git from '../assets/skills/git.svg';
import github from '../assets/skills/github.svg';
import bitbucket from '../assets/skills/bitbucket.svg';
import aws from '../assets/skills/aws.svg';
import docker from '../assets/skills/docker.svg';

export const mySkills: Skill[] = [
  {
    name: "HTML5",
    categories: ["linguagem", "frontend"],
    icon: html5
  },
  {
    name: "CSS3",
    categories: ["linguagem", "frontend", "estilização"],
    icon: css3
  },
  {
    name: "Javascript",
    categories: ["linguagem", "frontend", "backend"],
    icon: javascript
  },
  {
    name: "Typescript",
    categories: ["linguagem", "frontend", "backend"],
    icon: typescript
  },
  {
    name: "React",
    categories: ["frontend", "framework", "javascript"],
    icon: react
  },
  {
    name: "Next.JS",
    categories: ["frontend", "framework", "react", "fullstack"],
    icon: nextjs
  },
  {
    name: "Vue",
    categories: ["frontend", "framework", "javascript"],
    icon: vue
  },
  {
    name: "React Native",
    categories: ["mobile", "frontend", "framework", "react"],
    icon: reactnative
  },
  {
    name: "Node.js",
    categories: ["backend", "javascript", "runtime"],
    icon: nodejs
  },
  {
    name: "PHP",
    categories: ["linguagem", "backend"],
    icon: php
  },
  {
    name: "Laravel",
    categories: ["backend", "framework", "php"],
    icon: laravel
  },
  {
    name: "Python",
    categories: ["linguagem", "backend"],
    icon: python
  },
  {
    name: "Java",
    categories: ["linguagem", "backend"],
    icon: java
  },
  {
    name: "Tailwind",
    categories: ["frontend", "css", "framework"],
    icon: tailwind
  },
  {
    name: "Material UI",
    categories: ["frontend", "ui", "react"],
    icon: materialui
  },
  {
    name: "Bootstrap",
    categories: ["frontend", "css", "framework"],
    icon: bootstrap
  },
  {
    name: "Shadcn UI",
    categories: ["frontend", "ui", "react"],
    icon: shadcn
  },
  {
    name: "PostgreSQL",
    categories: ["banco de dados", "backend"],
    icon: postgresql
  },
  {
    name: "MongoDB",
    categories: ["banco de dados", "backend"],
    icon: mongodb
  },
  {
    name: "Linux",
    categories: ["devops"],
    icon: linux
  },
  {
    name: "Git",
    categories: ["ferramenta", "controle de versão"],
    icon: git
  },
  {
    name: "Github",
    categories: ["ferramenta", "controle de versão"],
    icon: github
  },
  {
    name: "Bitbucket",
    categories: ["ferramenta", "controle de versão"],
    icon: bitbucket
  },
  {
    name: "AWS",
    categories: ["cloud", "devops", "infraestrutura"],
    icon: aws
  },
  {
    name: "Docker",
    categories: ["devops", "containerização", "infraestrutura"],
    icon: docker
  }
];
