import { prisma } from '../../../database/prismaClient';
import { AppError } from '../../../errors/AppError';
import { IPictureProvider } from '../../../providers/PictureProvider/IProviderImage';
import { IStorageProvider } from '../../../providers/StorageProvider/IStorageProvider';
import { CreateImageSchema, ICreateImageDTO } from '../../dtos/ICreateImageDTO';

export class GenerateImageUseCase {
  constructor(
    private storageProvider: IStorageProvider,
    private pictureProvider: IPictureProvider,
  ) {}
  async execute(image: ICreateImageDTO) {
    const parsed = CreateImageSchema.safeParse(image);
    if (!parsed.success) {
      throw new AppError(400, 'Invalid request schema');
    }
    const { prompt } = image;

    const aiImageURL = await this.pictureProvider.generate(prompt);
    const url = await this.storageProvider.save(aiImageURL);

    const newImage = await prisma.image.create({
      data: { url, prompt },
    });

    return newImage;
  }
}
