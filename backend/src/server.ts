import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import { errorMiddleware } from './errors/errorMiddleware';
import { GenerateImageController } from './modules/useCases/generateImage/GenerateImageController';
import { GetLastTwentyFourImagesController } from './modules/useCases/getLastTwentyFourImages/GetLastTwentyFourImagesController';

const getLastTwentyFourImagesController =
  new GetLastTwentyFourImagesController();
const generateImageController = new GenerateImageController();

const PORT = process.env.PORT || '3008';

const app = express();
app.use(express.json());
app.use(cors());

app.post('/images', generateImageController.handle);
app.get('/images', getLastTwentyFourImagesController.handle)

app.use(errorMiddleware);
app.listen(PORT, () => console.log(`Running on ${PORT}`));
