import { Request, Response } from "express";
import { TUserArrRes, TUserReq, TUserRes } from "../interfaces/user.interfaces";
import { createUserService } from "../services/users/createUser.service";
import { listUsers } from "../services/users/listUsers.service";
import { deleteUsersService } from "../services/users/deleteUser.service";

export const createUserController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const newUserData: TUserReq = req.body;

    const newUser: TUserRes = await createUserService(newUserData);

    return res.status(201).json(newUser);
};

export const listAllUsersController = async(
    req: Request,
    res: Response
): Promise<Response> => {

    const usersList: TUserArrRes = await listUsers();

    return res.status(200).json(usersList);
};

export const deleteUsersController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const userId: number = parseInt(req.params.id);

    await deleteUsersService(userId);

    return res.status(204).send();
}
