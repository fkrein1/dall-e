import { api } from '../lib/axios';

interface Image {
  id: string;
  url: string;
  prompt: string;
}

export async function generateImage(prompt: string): Promise<Image> {
  const { data } = await api.post('images', { prompt });
  return data;
}
