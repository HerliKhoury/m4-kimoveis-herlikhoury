import { z } from "zod";
import { categoryReqSchema, categorySchema, categorySchemaArr } from "../schemas/category.schema";

export type TCategory = z.infer<typeof categorySchema>;
export type TCategoryArr = z.infer<typeof categorySchemaArr>;
export type TCategoryReq = z.infer<typeof categoryReqSchema>;