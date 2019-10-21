import axios from 'axios';

const api = axios.create({ baseURL: 'https://hydrogenium.herokuapp.com/api' });

export default api;
