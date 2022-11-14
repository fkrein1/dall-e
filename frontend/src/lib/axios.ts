import axios from 'axios';

const baseURL = import.meta.env.PROD
  ? 'https://api.dalleart.com.br'
  : 'http://localhost:3008';

export const api = axios.create({
  baseURL,
});
