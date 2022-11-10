import { Request, Response } from 'express';
import { DallePictureProvider } from '../../../providers/PictureProvider/DallePictureProvider';
import { S3StorageProvider } from '../../../providers/StorageProvider/S3StorageProvider';
import { GenerateImageUseCase } from './GenerateImageUseCase';

export class GenerateImageController {
  async handle(req: Request, res: Response) {
    const generateImageUseCase = new GenerateImageUseCase(
      new S3StorageProvider(),
      new DallePictureProvider(),
    );
    const result = await generateImageUseCase.execute(req.body);
    res.status(201).json(result);
  }
}
