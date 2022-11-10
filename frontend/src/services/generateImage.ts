import axios from 'axios';

interface Image {
  id: string;
  url: string;
  prompt: string;
}

export async function generateImage(prompt: string): Promise<Image> {
  const { data } = await axios.post(
    'https://dall-e-production.up.railway.app/images',
    { prompt },
  );
  return data;
}
