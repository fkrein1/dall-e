import { Request, Response } from 'express';
import { GetImagesUseCase } from './GetImagesUseCase';

export class GetImagesController {
  async handle(_req: Request, res: Response) {
    const getImagesUseCase = new GetImagesUseCase();
    const result = await getImagesUseCase.execute();
    return res.status(200).json(result);
  }
}
