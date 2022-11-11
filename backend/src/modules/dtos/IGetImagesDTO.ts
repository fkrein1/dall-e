import * as z from 'zod';

export const GetImageQuerySchema = z.object({
  page: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number().min(1).max(300),
  ),
});

export type IGetImagesDTO = z.infer<typeof GetImageQuerySchema>;
