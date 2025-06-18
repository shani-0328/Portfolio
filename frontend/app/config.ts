// Configuration file for the portfolio frontend
// Contains environment-specific variables

interface Config {
  apiBaseUrl: string;
  assetsUrl: string;
  apiTimeout: number;
}

// Development configuration
const devConfig: Config = {
  apiBaseUrl: 'http://localhost:8000',
  assetsUrl: 'http://localhost:8000/storage',
  apiTimeout: 15000 // 15 seconds
};

// Production configuration
const prodConfig: Config = {
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || '/api',
  assetsUrl: process.env.NEXT_PUBLIC_ASSETS_URL || '/storage',
  apiTimeout: 15000 // 15 seconds
};

// Determine which configuration to use based on environment
const config: Config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default config;
