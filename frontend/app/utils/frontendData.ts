import { Portfolio, Project, Skill, Contact } from './apiHooks';
import { getAssetPath } from './assetPath';

// Frontend data sources - moved from apiHooks.ts for better organization
export const frontendPortfolioData: Portfolio = {
  id: 1,
  name: 'Shanika Wijenayake',
  title: 'Full Stack Developer',
  bio: 'I am a full-stack software engineer with 3+ years of experience building scalable web applications using Laravel, PHP, JavaScript, and React. At Zeldiva Solutions, I led backend and API development that boosted performance and user engagement. I have developed end-to-end systems like booking platforms, stock management tools, and hardware solutions for global clients. I am passionate about clean code, responsive UI design, and continuously learning—currently diving into Ruby to broaden my tech stack.',
  email: 'madu.0502@gmail.com',
  phone: '+94 71 012 9795',
  address: 'Kandy, Sri Lanka',  photo: getAssetPath('/images/profile.jpg'),
  resume: getAssetPath('/files/resume.pdf'),
  social_media: {
    github: 'https://github.com/shani-0328',
    linkedin: 'https://www.linkedin.com/in/shanika-wijenayake-999331213',
    twitter: 'https://twitter.com'
  },
  created_at: '2025-01-15',
  updated_at: '2025-06-18'
};

export const frontendProjectsData: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform for Tyre House',
    description: 'A full featured e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, cart functionality, and payment processing.',
    technologies: '["React", "Node.js", "MySql", "Laravel", "Tailwind CSS"]',
    image: 'image_2.png',
    url: 'https://example.com/ecommerce',
    github_url: 'https://github.com/RandikaMa/Jayasanka-Tyre',
    featured: true,
    created_at: '2024-11-20',
    updated_at: '2025-03-15'
  },
  {
    id: 2,
    title: 'Yacht Story – Yacht Booking Platformp',
    description: 'A productivity application for teams to manage tasks and projects. Built with Vue.js and Firebase, with real-time updates and collaborative features.',
    technologies: '["Laravel", "Java Script", "MongoDB", "Tailwind CSS"]',
    image: 'image.png',
    url: 'https://yachtstory.com/',
    github_url: '',
    featured: true,
    created_at: '2024-08-10',
    updated_at: '2025-02-22'
  },
  {
    id: 3,
    title: 'Hardware and Construction Management System',
    description: 'A responsive portfolio website showcasing projects and skills. Built with Next.js and Tailwind CSS with a custom design.',
    technologies: '["Vue", "Laravel", "React", "TypeScript"]',
    image: 'image_3.png',
    url: 'https://thefloorstorepanel.com/login',
    github_url: 'https://github.com/username/portfolio',
    featured: false,
    created_at: '2025-01-05',
    updated_at: '2025-04-10'
  },
  {
    id: 4,
    title: 'AI Content Generator',
    description: 'An AI-powered application that generates marketing content based on user inputs. Integrates with OpenAI API and provides custom templates.',
    technologies: '["Python", "React", "Flask", "OpenAI API", "PostgreSQL"]',
    image: 'ai-content.jpg',
    url: 'https://example.com/ai-content',
    github_url: 'https://github.com/username/ai-content',
    featured: true,
    created_at: '2025-02-18',
    updated_at: '2025-05-30'
  }
];

export const frontendSkillsData: Skill[] = [
  { id: 1, name: 'JavaScript', proficiency: 90, icon: '/images/skills/JavaScript-01.svg', category: 'Frontend', created_at: '2025-01-01', updated_at: '2025-01-01' },
  { id: 2, name: 'React', proficiency: 85, icon: '/images/skills/react.svg', category: 'Frontend', created_at: '2025-01-01', updated_at: '2025-01-01' },
  { id: 3, name: 'TypeScript', proficiency: 80, icon: '/images/skills/typescript.svg', category: 'Frontend', created_at: '2025-01-01', updated_at: '2025-01-01' },
  { id: 4, name: 'Next.js', proficiency: 75, icon: '/images/skills/nextjs.svg', category: 'Frontend', created_at: '2025-01-01', updated_at: '2025-01-01' },
  { id: 5, name: 'Node.js', proficiency: 85, icon: '/images/skills/nodejs.svg', category: 'Backend', created_at: '2025-01-01', updated_at: '2025-01-01' },
  { id: 6, name: 'PHP', proficiency: 80, icon: '/images/skills/php.svg', category: 'Backend', created_at: '2025-01-01', updated_at: '2025-01-01' },
  { id: 7, name: 'Laravel', proficiency: 85, icon: '/images/skills/laravel.svg', category: 'Backend', created_at: '2025-01-01', updated_at: '2025-01-01' },
  { id: 8, name: 'MySQL', proficiency: 75, icon: '/images/skills/mysql.svg', category: 'Database', created_at: '2025-01-01', updated_at: '2025-01-01' },
  { id: 9, name: 'MongoDB', proficiency: 70, icon: '/images/skills/mongodb.svg', category: 'Database', created_at: '2025-01-01', updated_at: '2025-01-01' },
  { id: 10, name: 'Docker', proficiency: 65, icon: '/images/skills/docker.svg', category: 'DevOps', created_at: '2025-01-01', updated_at: '2025-01-01' },
  { id: 11, name: 'AWS', proficiency: 70, icon: '/images/skills/aws.svg', category: 'DevOps', created_at: '2025-01-01', updated_at: '2025-01-01' },
  { id: 12, name: 'Tailwind CSS', proficiency: 95, icon: '/images/skills/tailwind.svg', category: 'Frontend', created_at: '2025-01-01', updated_at: '2025-01-01' }
];

// Mock contacts data for admin interface
export const frontendContactsData: Contact[] = [
  { 
    id: 1, 
    name: 'John Doe', 
    email: 'john@example.com', 
    message: 'Interested in discussing a potential project opportunity.', 
    created_at: '2025-05-10', 
    updated_at: '2025-05-10' 
  },
  { 
    id: 2, 
    name: 'Jane Smith', 
    email: 'jane@example.com', 
    message: 'Love your portfolio! Would like to connect for a freelance opportunity.', 
    created_at: '2025-06-01', 
    updated_at: '2025-06-01' 
  },
  { 
    id: 3, 
    name: 'Alex Johnson', 
    email: 'alex@company.com', 
    message: 'We are looking for a developer with your skills for a long-term project.', 
    created_at: '2025-06-15', 
    updated_at: '2025-06-15' 
  }
];
