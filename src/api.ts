// src/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3', // Example API endpoint
});

export default api;
