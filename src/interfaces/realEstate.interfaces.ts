import { z } from "zod";
import { realEstateCreateSchema, realEstateReturnSchema } from "../schemas/realEstate.schema";

export type TRealEstate = z.infer<typeof realEstateCreateSchema>;
export type TRealEstateReturn = z.infer<typeof realEstateReturnSchema>;

