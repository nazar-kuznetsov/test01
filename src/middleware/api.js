import axios from 'axios';

export const API_ROOT = 'http://localhost:5500/api';
// const API_ROOT = 'api';

axios.defaults.headers.common.Authorization = localStorage.getItem('token');

const api = {
  get: endpoint => axios.get(`${API_ROOT}/${endpoint}`),
  post: (endpoint, data) => axios.post(`${API_ROOT}/${endpoint}`, data),
  put: (endpoint, data) => axios.put(`${API_ROOT}/${endpoint}`, data),
  delete: (endpoint, _id) => axios.post(`${API_ROOT}/${endpoint}`, _id),
  remove: (endpoint, _id) => axios.delete(`${API_ROOT}/${endpoint}`, _id)

};

export default api;
