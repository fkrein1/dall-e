import { Request, Response } from 'express';
import { GenerateImageUseCase } from './generateImageUseCase';

export class GenerateImageController {
  async handle(req: Request, res: Response) {
    const generateImageUseCase = new GenerateImageUseCase();
    const result = await generateImageUseCase.execute(req.body);
    res.status(201).json(result);
  }
}
