import { prisma } from '../../../database/prismaClient';

export class GetLastTwentyFourImagesUseCase {
  async execute() {
    const images = await prisma.image.findMany({ take: 24, orderBy: { date: 'desc' }, });

    return images;
  }
}
