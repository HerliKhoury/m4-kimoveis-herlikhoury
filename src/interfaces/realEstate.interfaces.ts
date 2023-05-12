import { z } from "zod";
import { realEstateSchema, realEstateSchemaReq, realEstateArr } from "../schemas/realEstate.schema";

export type TRealEstate = z.infer<typeof realEstateSchema>;
export type TRealEstateReq = z.infer<typeof realEstateSchemaReq>;
export type TRealEstateArr = z.infer<typeof realEstateArr>;
