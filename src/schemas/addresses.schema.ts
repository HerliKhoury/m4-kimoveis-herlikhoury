import { z } from "zod";

export const addressSchemaCreate = z.object({
  street: z.string(),
  zipCode: z.string().max(8),
  number: z.string().nullish(),
  city: z.string(),
  state: z.string().max(2),
});

export const  addressSchemaReturn = addressSchemaCreate.extend({
    id: z.number(),
});