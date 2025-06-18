import { Portfolio, Project, Skill, Contact } from './apiHooks';

// Import frontend data
import {
  frontendPortfolioData,
  frontendProjectsData,
  frontendSkillsData,
  frontendContactsData
} from './frontendData';

// Fetch the portfolio data from frontend
export const fetchPortfolio = async (): Promise<Portfolio> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  return frontendPortfolioData;
};

// Fetch all projects from frontend
export const fetchProjects = async (): Promise<Project[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return frontendProjectsData;
};

// Fetch a single project by ID from frontend
export const fetchProjectById = async (id: number): Promise<Project> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  const project = frontendProjectsData.find((p: Project) => p.id === id);
  if (!project) {
    throw new Error(`Project with ID ${id} not found`);
  }
  return project;
};

// Fetch all skills from frontend
export const fetchSkills = async (): Promise<Skill[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 400));
  return frontendSkillsData;
};

// Fetch skills by category
export const fetchSkillsByCategory = async (category: string): Promise<Skill[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  return frontendSkillsData.filter((skill: Skill) => skill.category === category);
};

// Send contact form data (just simulate success)
export const submitContactForm = async (data: Omit<Contact, 'id' | 'created_at' | 'updated_at'>): Promise<Contact> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Generate a fake response
  const newContact: Contact = {
    id: frontendContactsData.length + 1,
    name: data.name,
    email: data.email,
    message: data.message,
    created_at: new Date().toISOString().split('T')[0],
    updated_at: new Date().toISOString().split('T')[0]
  };
  
  // In a real application, we would push to the array, but here we just return it
  return newContact;
};

// Admin functions - these would typically require authentication

// Fetch all contacts (admin only) - frontend mock data
export const fetchContacts = async (token: string): Promise<Contact[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 400));
  // In a real app, we'd verify the token
  if (!token) {
    throw new Error('Authentication required');
  }
  return frontendContactsData;
};

// Update portfolio data (admin only)
export const updatePortfolio = async (data: Partial<Portfolio>, token: string): Promise<Portfolio> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 600));
  // In a real app, we'd verify the token
  if (!token) {
    throw new Error('Authentication required');
  }
  
  // Create an updated version of the portfolio data
  const updatedPortfolio = { ...frontendPortfolioData, ...data, updated_at: new Date().toISOString().split('T')[0] };
  
  // In a real application, we would update the data in a database
  return updatedPortfolio;
};

// Create a new project (admin only)
export const createProject = async (data: Omit<Project, 'id' | 'created_at' | 'updated_at'>, token: string): Promise<Project> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 700));
  // In a real app, we'd verify the token
  if (!token) {
    throw new Error('Authentication required');
  }
  
  // Generate a fake new project
  const newProject: Project = {
    id: Math.max(...frontendProjectsData.map((p: Project) => p.id)) + 1,
    ...data,
    created_at: new Date().toISOString().split('T')[0],
    updated_at: new Date().toISOString().split('T')[0]
  };
  
  // In a real application, we would add this to the database
  return newProject;
};

// Update a project (admin only)
export const updateProject = async (id: number, data: Partial<Project>, token: string): Promise<Project> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  // In a real app, we'd verify the token
  if (!token) {
    throw new Error('Authentication required');
  }
  
  // Find the project
  const projectIndex = frontendProjectsData.findIndex((p: Project) => p.id === id);
  if (projectIndex === -1) {
    throw new Error(`Project with ID ${id} not found`);
  }
  
  // Create an updated version of the project
  const updatedProject = { 
    ...frontendProjectsData[projectIndex], 
    ...data, 
    updated_at: new Date().toISOString().split('T')[0] 
  };
  
  // In a real application, we would update the data in a database
  return updatedProject;
};

// Delete a project (admin only)
export const deleteProject = async (id: number, token: string): Promise<void> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 400));
  // In a real app, we'd verify the token
  if (!token) {
    throw new Error('Authentication required');
  }
  
  // Find the project
  const projectIndex = frontendProjectsData.findIndex((p: Project) => p.id === id);
  if (projectIndex === -1) {
    throw new Error(`Project with ID ${id} not found`);
  }
  
  // In a real application, we would remove from the database
  // Here we just simulate success
};