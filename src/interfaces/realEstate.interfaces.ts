import { z } from "zod";
import { realEstateSchema, realEstateSchemaArr } from "../schemas/realEstate.schema";

export type TRealEstate = z.infer<typeof realEstateSchema>;
export type TRealEstateArr = z.infer<typeof realEstateSchemaArr>;