import { Request, Response } from "express";
import { TUserArrRes, TUserReq, TUserRes } from "../interfaces/user.interfaces";
import { createUserService } from "../services/users/createUser.service";
import { listUsers } from "../services/users/listUsers.service";

export const createUserController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const newUserData: TUserReq = req.body;

    const newUser: TUserRes = await createUserService(newUserData);

    return res.status(201).json(newUser);
};

export const listAllUsers = async(
    req: Request,
    res: Response
): Promise<Response> => {

    const usersList: TUserArrRes = await listUsers();

    return res.status(200).json(usersList);
};