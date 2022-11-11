import { api } from '../lib/axios';

interface Image {
  id: string;
  url: string;
  prompt: string;
}

export async function getImages(page: number = 1): Promise<Image[]> {
  const { data } = await api.get('/images', { params: { page } });
  return data;
}
