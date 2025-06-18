'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';

export interface ApiResponse<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
}

/**
 * Custom hook for fetching data from the API
 * @param endpoint - API endpoint to fetch from
 * @param initialData - Initial data to use before fetching
 * @returns ApiResponse object with data, loading state, error, and refetch function
 */
export function useApi<T>(endpoint: string, initialData: T | null = null): ApiResponse<T> {
  const [data, setData] = useState<T | null>(initialData);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [refreshIndex, setRefreshIndex] = useState<number>(0);
  const refetch = () => setRefreshIndex(prev => prev + 1);  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
        try {
        // Debug the URL
        const url = `${config.apiBaseUrl}/api/${endpoint}`;
        console.log(`Fetching data from ${url}`);
        
        // Use retry mechanism
        const response = await retryWithBackoff(() => 
          axios.get<T>(url, {
            timeout: config.apiTimeout,
            validateStatus: status => status < 500 // Any status code less than 500 is resolved
          })
        );
        console.log(`Received data from ${url}:`, response.data);
        
        // Process the response data
        let processedData = response.data;
        
        // Handle portfolio social_media JSON string if applicable
        if (endpoint === 'portfolio' && 
            typeof processedData === 'object' && 
            processedData !== null && 
            'social_media' in processedData && 
            typeof processedData.social_media === 'string') {
          try {
            processedData = {
              ...processedData,
              social_media: JSON.parse(processedData.social_media)
            };
          } catch (jsonError) {
            console.error('Error parsing social_media JSON:', jsonError);
          }
        }
        
        setData(processedData);
        setError(null);      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'));
        console.error(`Error fetching data from ${endpoint}:`, err);
        
        // Log detailed error information
        if (axios.isAxiosError(err)) {
          console.error('Axios error details:', {
            message: err.message,
            code: err.code,
            status: err.response?.status,
            statusText: err.response?.statusText,
            responseData: err.response?.data,
            config: {
              url: err.config?.url,
              method: err.config?.method,
              timeout: err.config?.timeout,
            }
          });
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [endpoint, refreshIndex]);

  return { data, isLoading, error, refetch };
}

/**
 * Custom hook for submitting data to the API
 * @param endpoint - API endpoint to submit to
 * @returns Object with submit function, loading state, and error
 */
export function useSubmit<T, R>(endpoint: string) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<R | null>(null);

  const submit = async (formData: T): Promise<R | null> => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await axios.post<R>(`${config.apiBaseUrl}/${endpoint}`, formData);
      setData(response.data);
      return response.data;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An error occurred'));
      console.error(`Error submitting data to ${endpoint}:`, err);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return { submit, isLoading, error, data };
}

/**
 * Function to retry a promise with exponential backoff
 * @param fn - Function that returns a promise
 * @param retriesLeft - Number of retries left
 * @param interval - Initial interval in milliseconds
 */
async function retryWithBackoff<T>(
  fn: () => Promise<T>, 
  retriesLeft = 3, 
  interval = 1000
): Promise<T> {
  try {
    return await fn();
  } catch (error) {
    if (retriesLeft === 0) {
      throw error;
    }
    
    console.log(`Retrying after ${interval}ms... (${retriesLeft} retries left)`);
    
    // Wait for the interval
    await new Promise(resolve => setTimeout(resolve, interval));
    
    // Exponential backoff
    return retryWithBackoff(fn, retriesLeft - 1, interval * 2);
  }
}
