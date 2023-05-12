import { Router } from "express";
import { ensureTokenIsValid } from "../middlewares/ensureTokenIsValid";
import { ensureUserIsAdm } from "../middlewares/ensureUserIsAdmin.middleware";
import { createSchedulesController, listAllSchedulesController } from "../controllers/schedules.controllers";
import { ensureBodyIsValid } from "../middlewares/ensureBodyIsValid.middleware";
import { scheduleSchemaReq } from "../schemas/schedule.schema";
import { ensureScheduleIsValid } from "../middlewares/ensureScheduleIsValid.middleware";

export const schedulesRoutes: Router = Router();

schedulesRoutes.post(
    "", 
    ensureTokenIsValid, 
    ensureBodyIsValid(scheduleSchemaReq),
    ensureScheduleIsValid,
    createSchedulesController
);

schedulesRoutes.get(
    "/realEstate/:id", 
    ensureTokenIsValid, 
    ensureUserIsAdm, 
    listAllSchedulesController
);