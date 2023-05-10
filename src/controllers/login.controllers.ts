import { Request, Response } from "express"
import { TLoginRequest } from "../interfaces/login.interfaces";
import { createSessionService } from "../services/login/createSession.service";

export const createTokenController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const loginData: TLoginRequest = req.body;

    const token: string = await createSessionService(loginData);

    return res.json({ token });
}