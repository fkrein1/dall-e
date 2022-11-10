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

    const imageURL = await this.pictureProvider.generate(prompt);
    const publicURL = await this.storageProvider.save(imageURL);

    const newImage = await prisma.image.create({
      data: { url: publicURL, prompt },
    });

    return newImage;
  }
}
