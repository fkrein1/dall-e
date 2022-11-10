import { prisma } from '../../../database/prismaClient';

export class GetImagesUseCase {
  async execute() {
    const images = await prisma.image.findMany({
      take: 100,
      orderBy: { date: 'desc' },
    });

    return images;
  }
}
