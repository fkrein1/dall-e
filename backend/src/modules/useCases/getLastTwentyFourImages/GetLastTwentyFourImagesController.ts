import { Request, Response } from "express";
import { GetLastTwentyFourImagesUseCase } from "./GetLastTwentyFourImagesUseCase";



export class GetLastTwentyFourImagesController {
  async handle(_req: Request, res: Response) {
    const getLastTwentyFourImagesUseCase = new GetLastTwentyFourImagesUseCase()
    const result = await getLastTwentyFourImagesUseCase.execute();
    return res.status(200).json(result)
  }
}