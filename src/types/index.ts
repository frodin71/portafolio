export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  demoUrl: string;
  codeUrl: string;
  technologies: Technology[];
}

export type Technology = 
  | 'React' 
  | 'TypeScript' 
  | 'JavaScript' 
  | 'HTML/CSS' 
  | 'Node.js' 
  | 'Express' 
  | 'MongoDB' 
  | 'Firebase'
  | 'Tailwind CSS'
  | 'Next.js'
  | 'GraphQL'
  | 'Redux'
  | 'Flutter'
  | 'Dart'
  | 'Unity'
  | 'C#';

export interface SocialLink {
  platform: 'GitHub' | 'LinkedIn' | 'Twitter' | 'Instagram' | 'Email';
  url: string;
}

export type Theme = 'light' | 'dark';