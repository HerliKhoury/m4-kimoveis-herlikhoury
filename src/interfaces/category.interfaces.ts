import { z } from "zod";
import { categorySchema, categorySchemaArr } from "../schemas/category.schema";

export type TCategory = z.infer<typeof categorySchema>;
export type TCategoryArr = z.infer<typeof categorySchemaArr>;