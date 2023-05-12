import { Router } from "express";
import { ensureTokenIsValid } from "../middlewares/ensureTokenIsValid";
import { ensureUserIsAdm } from "../middlewares/ensureUserIsAdmin.middleware";
import { listAllSchedulesController } from "../controllers/schedules.controllers";
import { ensureBodyIsValid } from "../middlewares/ensureBodyIsValid.middleware";
import { scheduleSchemaReq } from "../schemas/schedule.schema";

export const schedulesRoutes: Router = Router();

schedulesRoutes.post(
    "", 
    ensureTokenIsValid, 
    ensureBodyIsValid(scheduleSchemaReq)
);

schedulesRoutes.get(
    "/realEstate/:id", 
    ensureTokenIsValid, 
    ensureUserIsAdm, 
    listAllSchedulesController
);