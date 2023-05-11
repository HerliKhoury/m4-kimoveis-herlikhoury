import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError.error";


export const ensureUserIsAdm = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const isAdm: boolean = res.locals.admin; 

    if(isAdm === false){
        throw new AppError("Insufficient permission", 403);
    };

    return next();
};