import { z } from "zod";
import { userReqSchema, userResSchema, userSchema, userSchemaArr, userSchemaArrRes } from "../schemas/user.schema";
import { DeepPartial } from "typeorm";

export type TUser = z.infer<typeof userSchema>;
export type TUserReq = z.infer<typeof userReqSchema>;
export type TUserRes = z.infer<typeof userResSchema>;
export type TUserArr = z.infer<typeof userSchemaArr>;
export type TUserArrRes = z.infer<typeof userSchemaArrRes>;
export type TUserReqUpdate = DeepPartial<TUserReq>;