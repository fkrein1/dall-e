import axios from 'axios';

interface Images {
  id: string;
  url: string;
  prompt: string;
}

export async function getImages(): Promise<Images[]> {
  const { data } = await axios.get('https://dall-e-production.up.railway.app/images');
  return data
}
