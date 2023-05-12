import { Router } from "express";
import { ensureTokenIsValid } from "../middlewares/ensureTokenIsValid";
import { ensureUserIsAdm } from "../middlewares/ensureUserIsAdmin.middleware";
import { ensureBodyIsValid } from "../middlewares/ensureBodyIsValid.middleware";
import { realEstateCreateSchema } from "../schemas/realEstate.schema";
import { createRealEstateController, listAllRealEstatesController } from "../controllers/realEstate.controllers";


export const realStateRoutes: Router = Router();

realStateRoutes.post(
    "",
    ensureTokenIsValid, 
    ensureUserIsAdm,
    ensureBodyIsValid(realEstateCreateSchema), 
    createRealEstateController
);

realStateRoutes.get("", listAllRealEstatesController);