import { Project } from '../types';
import calculadoraImg from '../assets/calculadora-cervecera.png';
import videoGameImg from '../assets/video-game.png';
import financeImg from '../assets/finance-app.png';

export const projects: Project[] = [
  {
    id: 'project-1',
    title: "Calculadora de Cerveza",
    description: "Calculadora artesanal para estimar carbonatación y grados alcohólicos.",
    image: calculadoraImg,
    demoUrl: "#",
    codeUrl: "#",
    technologies: ["React", "Tailwind CSS", "TypeScript"],
  },
  {
    id: "project-2",
    title: "App de Finanzas Personales",
    description: "App móvil para gestionar ingresos y gastos de forma sencilla.",
    image: financeImg,
    demoUrl: "#",
    codeUrl: "#",
    technologies: ["Flutter", "Dart"],
  },
  {
    id: "project-3",
    title: "Mini Juego de Consola",
    description: "Juego sencillo estilo retro compatible con joystick de Switch.",
    image: videoGameImg,
    demoUrl: "#",
    codeUrl: "#",
    technologies: ["Unity", "C#"],
  }
  // {
  //   id: 'project-4',
  //   title: 'E-commerce Platform',
  //   description: 'A fully responsive e-commerce platform with product filtering, cart functionality, and secure checkout process using Stripe integration.',
  //   image: 'https://images.pexels.com/photos/6956800/pexels-photo-6956800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   demoUrl: 'https://example.com/demo1',
  //   codeUrl: 'https://github.com/username/project1',
  //   technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS']
  // },
  // {
  //   id: 'project-5',
  //   title: 'Task Management App',
  //   description: 'A productivity application for managing tasks with drag-and-drop functionality, user authentication, and real-time updates.',
  //   image: 'https://images.pexels.com/photos/6177645/pexels-photo-6177645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   demoUrl: 'https://example.com/demo2',
  //   codeUrl: 'https://github.com/username/project2',
  //   technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS']
  // },
  // {
  //   id: 'project-6',
  //   title: 'Weather Dashboard',
  //   description: 'A weather application that provides real-time forecasts, historical data, and interactive maps using OpenWeatherMap API.',
  //   image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   demoUrl: 'https://example.com/demo3',
  //   codeUrl: 'https://github.com/username/project3',
  //   technologies: ['React', 'JavaScript', 'HTML/CSS', 'Redux']
  // },
  // {
  //   id: 'project-7',
  //   title: 'Blog Platform',
  //   description: 'A full-featured blogging platform with markdown support, comment system, and user authentication.',
  //   image: 'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   demoUrl: 'https://example.com/demo4',
  //   codeUrl: 'https://github.com/username/project4',
  //   technologies: ['Next.js', 'TypeScript', 'GraphQL', 'MongoDB']
  // },
  // {
  //   id: 'project-8',
  //   title: 'Finance Tracker',
  //   description: 'A personal finance application for tracking expenses, income, and investments with data visualization and budget planning features.',
  //   image: 'https://images.pexels.com/photos/5980740/pexels-photo-5980740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   demoUrl: 'https://example.com/demo5',
  //   codeUrl: 'https://github.com/username/project5',
  //   technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS']
  // },
  // {
  //   id: 'project-9',
  //   title: 'Social Media Dashboard',
  //   description: 'A dashboard for social media managers to track engagement, schedule posts, and analyze performance across multiple platforms.',
  //   image: 'https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   demoUrl: 'https://example.com/demo6',
  //   codeUrl: 'https://github.com/username/project6',
  //   technologies: ['React', 'TypeScript', 'GraphQL', 'Next.js']
  // }
];

export const socialLinks = [
  {
    platform: 'GitHub',
    url: 'https://github.com/frodin71'
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/username'
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/username'
  },
  {
    platform: 'Instagram',
    url: 'https://instagram.com/aechavarrias'
  },
  {
    platform: 'Email',
    url: 'mailto:nanoechavarria@gmail.com'
  }
] as const;