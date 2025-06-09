// src/services/authService.js
import api from './api';

export const signup = (userData) =>
  api.post('/auth/signup', userData).then(res => res.data);

export const login = (credentials) =>
  api.post('/auth/login', credentials).then(res => res.data);
