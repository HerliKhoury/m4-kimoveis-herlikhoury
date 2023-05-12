import { Router } from "express";
import { ensureEmailDontExist } from "../middlewares/ensureEmailDontExist.middleware";
import { ensureBodyIsValid } from "../middlewares/ensureBodyIsValid.middleware";
import { userReqSchema, userReqUpdateSchema } from "../schemas/user.schema";
import { createUserController, deleteUserController, listAllUsersController, updateUserController } from "../controllers/users.controllers";
import { ensureUserIsAdm } from "../middlewares/ensureUserIsAdmin.middleware";
import { ensureTokenIsValid } from "../middlewares/ensureTokenIsValid";
import { ensureUserIsActive } from "../middlewares/ensureUserIsActive.middleware";

export const userRoutes: Router = Router();

userRoutes.post(
    "", 
    ensureBodyIsValid(userReqSchema),
    ensureEmailDontExist, 
    createUserController
);

userRoutes.get("", ensureTokenIsValid, ensureUserIsAdm, listAllUsersController);

userRoutes.patch(
    "/:id",
    ensureBodyIsValid(userReqUpdateSchema), 
    ensureTokenIsValid, 
    updateUserController
);

userRoutes.delete(
    "/:id",
    ensureTokenIsValid,  
    ensureUserIsActive, 
    ensureUserIsAdm, 
    deleteUserController
);