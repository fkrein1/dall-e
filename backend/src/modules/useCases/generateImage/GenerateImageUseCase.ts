import { Configuration, OpenAIApi } from 'openai';
import { prisma } from '../../../database/prismaClient';
import { AppError } from '../../../errors/AppError';
import { CreateImageSchema, ICreateImageDTO } from '../../dtos/ICreateImageDTO';

export class GenerateImageUseCase {
  async execute(image: ICreateImageDTO) {
    const parsed = CreateImageSchema.safeParse(image);
    if (!parsed.success) {
      throw new AppError(400, 'Invalid request schema');
    }

    const { prompt } = image;

    const configuration = new Configuration({
      apiKey: process.env.OPENAI_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const result = await openai.createImage({
      prompt,
      n: 1,
      size: '512x512',
    });

    const url = result.data.data[0].url;
    if (!url) throw new AppError(404, 'Error generating image');
    const createdImage = await prisma.image.create({ data: { url, prompt } });

    return createdImage;
  }
}
