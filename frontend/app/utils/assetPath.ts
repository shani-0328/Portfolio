/**
 * Utility function to properly resolve asset paths considering the basePath in different environments
 * 
 * This function prevents double-prefixing by checking if the path already contains the basePath
 */
export function getAssetPath(path: string): string {
  // Path is already processed or external URL
  if (!path || path.startsWith('http') || path.startsWith('data:')) {
    return path;
  }
  
  const basePath = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';
  
  // If we're in production and the path already includes the basePath, don't add it again
  if (process.env.NODE_ENV === 'production' && path.includes('/Portfolio')) {
    return path;
  }
  
  // Make sure the path starts with a slash
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${basePath}${normalizedPath}`;
}