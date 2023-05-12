import { Router } from "express";
import { createCategoryController, listAllCategoriesController, retrieveRealEstateByCategoryIdController } from "../controllers/category.controllers";
import { ensureUserIsAdm } from "../middlewares/ensureUserIsAdmin.middleware";
import { ensureCategoryDontExist } from "../middlewares/ensureCategoryDontExist.middleware";
import { ensureTokenIsValid } from "../middlewares/ensureTokenIsValid";

export const categoriesRoutes: Router = Router();

categoriesRoutes.post("",
 ensureTokenIsValid, 
 ensureUserIsAdm, 
 ensureCategoryDontExist, 
 createCategoryController
);
categoriesRoutes.get("", listAllCategoriesController);
categoriesRoutes.get("/:id/realEstate", retrieveRealEstateByCategoryIdController);