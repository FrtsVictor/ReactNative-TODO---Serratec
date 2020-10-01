import axios from 'axios';
// Path of mobile app
const api = axios.create({
  baseURL: 'http://10.0.2.2:3333',
});

export default api;
