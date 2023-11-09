import OpenAI from 'openai';
import { AppError } from '../../errors/AppError';
import { IPictureProvider } from './IProviderImage';

export class DallePictureProvider implements IPictureProvider {
  private client: OpenAI;

  constructor() {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_KEY,
    });

    this.client = openai
  }
  async generate(prompt: string) {
    const result = await this.client.images.generate({
      model: "dall-e-3",
      prompt,
      n: 1,
      size: '512x512',
    });

    const imageURL = result.data[0].url;
    if (!imageURL) throw new AppError(404, 'Error generating image');
    return imageURL;
  }
}
