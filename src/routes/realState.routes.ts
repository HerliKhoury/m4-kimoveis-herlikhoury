import { Router } from "express";
import { ensureTokenIsValid } from "../middlewares/ensureTokenIsValid";
import { ensureUserIsAdm } from "../middlewares/ensureUserIsAdmin.middleware";
import { ensureBodyIsValid } from "../middlewares/ensureBodyIsValid.middleware";
import { realEstateSchemaReq } from "../schemas/realEstate.schema";
import { createRealEstateController, listAllRealEstatesController } from "../controllers/realEstate.controllers";
import { ensureAddressDontExist } from "../middlewares/ensureAddressDontExist.middleware";

export const realStateRoutes: Router = Router();

realStateRoutes.post(
    "",
    ensureBodyIsValid(realEstateSchemaReq), 
    ensureTokenIsValid, 
    ensureUserIsAdm,
    ensureAddressDontExist, 
    createRealEstateController
);

realStateRoutes.get("", listAllRealEstatesController);