import axios from 'axios';

interface Image {
  id: string;
  url: string;
  prompt: string;
}

export async function getImages(): Promise<Image[]> {
  const { data } = await axios.get('https://dall-e-production.up.railway.app/images');
  return data
}
