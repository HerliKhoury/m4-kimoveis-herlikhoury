import { Router } from "express";
import { createCategory, listAllCategories } from "../controllers/category.controllers";
import { ensureUserIsAdm } from "../middlewares/ensureUserIsAdmin.middleware";

export const categoriesRoutes: Router = Router();

categoriesRoutes.post("", ensureUserIsAdm, createCategory);
categoriesRoutes.get("", listAllCategories);
categoriesRoutes.get("/:id/realEstate");