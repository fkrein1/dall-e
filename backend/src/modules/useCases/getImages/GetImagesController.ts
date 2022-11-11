import { Request, Response } from 'express';
import { IGetImagesDTO } from '../../dtos/IGetImagesDTO';
import { GetImagesUseCase } from './GetImagesUseCase';

export class GetImagesController {
  async handle(req: Request, res: Response) {
    const getImagesUseCase = new GetImagesUseCase();
    const result = await getImagesUseCase.execute(req.query);
    return res.status(200).json(result);
  }
}
