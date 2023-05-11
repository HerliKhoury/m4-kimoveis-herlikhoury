import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors/appError.error";


export const ensureEmailDontExist = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void>=> {
    const userRepo: Repository<User> = AppDataSource.getRepository(User);

    const userEmail: string = req.body.email;

    const user: User | null = await userRepo.findOne({
        where: {
            email: userEmail
        }
    });

    if(user){
        throw new AppError("Email already exists", 409)
    };

    return next();
}