import { z } from "zod";
import { addressSchemaCreate, addressSchemaReturn } from "./addresses.schema";
import { categorySchema } from "./category.schema";

export const realEstateCreateSchema = z.object({
    value: z.number().or(z.string()),
    size: z.number().int().positive(),
    sold: z.boolean().optional().default(false),
    address: addressSchemaCreate,
    categoryId: z.number().optional().nullish(),
});
  
export const realEstateReturnSchema = realEstateCreateSchema.extend({
    id: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
    address: addressSchemaReturn,
    category: categorySchema,
}).omit({ categoryId: true });
  
export const realEstateReturnAll = realEstateReturnSchema.omit({
    category: true,
}).array();