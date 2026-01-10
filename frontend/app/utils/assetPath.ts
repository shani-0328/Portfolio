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
  
  // Use relative path with basePath for GitHub Pages
  const basePath = '/Portfolio';
  
  // If the path already includes the basePath, don't add it again
  if (path.includes('/Portfolio')) {
    return path;
  }
  
  // Make sure the path starts with a slash
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${basePath}${normalizedPath}`;
}