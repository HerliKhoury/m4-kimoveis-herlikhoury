import { Router } from "express";
import { ensureEmailDontExist } from "../middlewares/ensureEmailDontExist.middleware";
import { ensureBodyIsValid } from "../middlewares/ensureBodyIsValid.middleware";
import { userReqSchema } from "../schemas/user.schema";
import { createUserController, deleteUserController, listAllUsersController, updateUserController } from "../controllers/users.controllers";
import { ensureUserIsAdm } from "../middlewares/ensureUserIsAdmin.middleware";
import { ensureUserIsActive } from "../middlewares/ensureUserIsActive.middleware";

export const userRoutes: Router = Router();

userRoutes.post("", ensureBodyIsValid(userReqSchema), ensureEmailDontExist, createUserController);
userRoutes.get("", ensureUserIsAdm, listAllUsersController);
userRoutes.patch("/:id", updateUserController);
userRoutes.delete("/:id", ensureUserIsAdm, ensureUserIsActive, deleteUserController);