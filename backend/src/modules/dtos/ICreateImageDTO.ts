import * as z from 'zod';


export const CreateImageSchema = z.object({
  prompt: z.string().min(8),
});

export type ICreateImageDTO = z.infer<typeof CreateImageSchema>;
