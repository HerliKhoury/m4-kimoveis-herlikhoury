import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors/appError.error";


export const ensureUserIsActive = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const userRepo: Repository<User> = AppDataSource.getRepository(User);

    const userId: number = parseInt(req.params.id);

    const user: User | null = await userRepo.findOne({
        where: {
            id: userId
        }
    });

    if (!user) {
        throw new AppError("User not found", 404);
    }

    return next();
};