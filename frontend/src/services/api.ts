import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add interceptor for auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authService = {
  login: (data: any) => api.post('/auth/login', data),
  register: (data: any) => api.post('/auth/register', data),
  me: () => api.get('/auth/me'),
};

export const dashboardService = {
  getSummary: () => api.get('/dashboard/summary'),
};

export const deploymentService = {
  getAll: () => api.get('/deployments'),
  start: (data: any) => api.post('/deployments/start', data),
  rollback: (data: any) => api.post('/deployments/rollback', data),
};

export const environmentService = {
  getAll: () => api.get('/environments'),
};

export default api;
