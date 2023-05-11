import { z } from "zod";

export const categorySchema = z.object({
    id: z.number().int().positive(),
    name: z.string().max(45).nonempty()
});

export const categorySchemaArr = z.array(categorySchema);

export const categoryReqSchema = categorySchema.omit({ id: true });