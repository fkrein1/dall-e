import { Configuration, OpenAIApi } from 'openai';
import { AppError } from '../../errors/AppError';
import { IPictureProvider } from './IProviderImage';

export class DallePictureProvider implements IPictureProvider {
  private client: OpenAIApi;

  constructor() {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_KEY,
    });

    this.client = new OpenAIApi(configuration);
  }
  async generate(prompt: string) {
    const result = await this.client.createImage({
      prompt,
      n: 1,
      size: '512x512',
    });

    const imageURL = result.data.data[0].url;
    if (!imageURL) throw new AppError(404, 'Error generating image');
    return imageURL;
  }
}
