import * as z from 'zod';

export const GetImageQuerySchema = z.object({
  page: z.string().regex(/^\d+$/).transform(Number)
});

export type IGetImagesDTO = z.infer<typeof GetImageQuerySchema>;
