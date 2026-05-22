import axios from 'axios';

const api = axios.create({
  baseURL: 'https://health-monitoring-system-6hxx.onrender.com',
});

export default api;