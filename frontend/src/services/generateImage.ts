import { api } from '../lib/axios';

interface Image {
  id: string;
  url: string;
  prompt: string;
}

export async function generateImage(prompt: string) {
  const { data } = await api.post<Image>('images', { prompt });
  return data;
}
