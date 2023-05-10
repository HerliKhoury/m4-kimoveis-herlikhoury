import { Router } from "express";
import { ensureEmailDontExist } from "../middlewares/ensureEmailDontExist.middleware";
import { ensureBodyIsValid } from "../middlewares/ensureBodyIsValid.middleware";
import { userReqSchema } from "../schemas/user.schema";
import { createUserController, listAllUsers } from "../controllers/users.controllers";
import { ensureUserIsAdm } from "../middlewares/ensureUserIsAdmin.middleware";

export const userRoutes: Router = Router();

userRoutes.post("", ensureBodyIsValid(userReqSchema), ensureEmailDontExist, createUserController);
userRoutes.get("", ensureUserIsAdm, listAllUsers);
userRoutes.patch("/:id");
userRoutes.delete("/:id");