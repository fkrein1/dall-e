import axios from 'axios';

const baseURL = import.meta.env.PROD
  ? 'https://dall-e-production.up.railway.app'
  : 'http://localhost:3008';

export const api = axios.create({
  baseURL,
});
