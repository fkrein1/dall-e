import { api } from '../lib/axios';

interface Image {
  id: string;
  url: string;
  prompt: string;
}

export async function generateImage(prompt: string) {
  const currentDate = new Date();
  const dayOfMonth = String(currentDate.getDate());
  const lastImageDay = localStorage.getItem('@dall-e-art:day');
  if (dayOfMonth === lastImageDay) {
    return alert('Sorry. You reached your daily limit.');
  }

  localStorage.setItem('@dall-e-art:day', dayOfMonth);
  const { data } = await api.post<Image>('images', { prompt });
  return data;
}
