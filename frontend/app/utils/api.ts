import axios from 'axios';
import config from '../config';

const apiClient = axios.create({
  baseURL: `${config.apiBaseUrl}/api`,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: false,
});

export default apiClient;
