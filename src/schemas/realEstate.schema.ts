import { z } from "zod";

export const realEstateSchema = z.object({
    id: z.number().int().positive(),
    sold: z.boolean().default(false).optional(),
    value: z.number().default(0).optional(),
    size: z.number().int().positive(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    addressesId: z.number(),
    categoryId: z.number()
});

export const realEstateSchemaReq = z.object({
    sold: z.boolean().default(false).optional(),
    value: z.number().default(0).optional(),
    size: z.number().int().positive(),
    addressesId: z.number(),
    categoryId: z.number()
});

export const realEstateArr = z.array(realEstateSchema);