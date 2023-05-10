import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError.error";


export const ensureUserIsAdm = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const isAdm = res.locals.admin;

    if(!isAdm){
        throw new AppError("Insufficient Permission", 403);
    };

    return next();
};