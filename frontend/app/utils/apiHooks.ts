import { useState, useEffect } from 'react';

// Import frontend data
import { 
  frontendPortfolioData, 
  frontendProjectsData, 
  frontendSkillsData,
  frontendContactsData
} from './frontendData';

// Types
export interface Portfolio {
  id: number;
  name: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  address: string;
  photo: string;
  resume: string;
  social_media: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    [key: string]: string | undefined;
  };
  created_at: string;
  updated_at: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string;
  image: string;
  url: string;
  github_url: string;
  featured: boolean;
  created_at: string;
  updated_at: string;
}

export interface Skill {
  id: number;
  name: string;
  category: string;
  proficiency: number;
  icon: string;
  created_at: string;
  updated_at: string;
}

export interface Contact {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
  updated_at: string;
}

// Custom hooks that use frontend data instead of API calls
export function usePortfolio() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Portfolio | null>(null);
  
  useEffect(() => {
    // Simulate API loading time
    const timer = setTimeout(() => {
      setData(frontendPortfolioData);
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  return { data, isLoading, error: null, refetch: () => {} };
}

export function useProjects() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Project[] | null>(null);
  
  useEffect(() => {
    // Simulate API loading time
    const timer = setTimeout(() => {
      setData(frontendProjectsData);
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return { data, isLoading, error: null, refetch: () => {} };
}

export function useSkills() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Skill[] | null>(null);
  
  useEffect(() => {
    // Simulate API loading time
    const timer = setTimeout(() => {
      setData(frontendSkillsData);
      setIsLoading(false);
    }, 400);
    
    return () => clearTimeout(timer);
  }, []);
  
  return { data, isLoading, error: null, refetch: () => {} };
}

// This would typically be for admin use, returning the mock data
export function useContacts() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Contact[] | null>(null);
  
  useEffect(() => {
    // Simulate API loading time
    const timer = setTimeout(() => {
      setData(frontendContactsData);
      setIsLoading(false);
    }, 200);
    
    return () => clearTimeout(timer);
  }, []);
  
  return { data, isLoading, error: null, refetch: () => {} };
}