import axios from 'axios';

const baseURL = 'https://dall-e-production.up.railway.app'

export const api = axios.create({
  baseURL,
});
