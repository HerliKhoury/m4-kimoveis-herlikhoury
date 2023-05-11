import { Router } from "express";
import { createCategory, listAllCategories, retrieveRealEstateByCategoryIdController } from "../controllers/category.controllers";
import { ensureUserIsAdm } from "../middlewares/ensureUserIsAdmin.middleware";
import { ensureCategoryDontExist } from "../middlewares/ensureCategoryDontExist.middleware";

export const categoriesRoutes: Router = Router();

categoriesRoutes.post("", ensureUserIsAdm, ensureCategoryDontExist, createCategory);
categoriesRoutes.get("", listAllCategories);
categoriesRoutes.get("/:id/realEstate", retrieveRealEstateByCategoryIdController);