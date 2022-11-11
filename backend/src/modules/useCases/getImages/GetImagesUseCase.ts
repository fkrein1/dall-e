import { prisma } from '../../../database/prismaClient';
import { GetImageQuerySchema } from '../../dtos/IGetImagesDTO';

export class GetImagesUseCase {
  async execute(query: any) {
    let page = 1;
    const parsed = GetImageQuerySchema.safeParse(query);
    if (parsed.success) page = query.page;

    const imagesPerRequest = 100;
    const skip = (page - 1) * imagesPerRequest;
    
    const images = await prisma.image.findMany({
      skip,
      take: imagesPerRequest,
      orderBy: { date: 'desc' },
    });

    return images;
  }
}
