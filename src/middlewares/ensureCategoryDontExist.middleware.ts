import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Category } from "../entities";
import { AppError } from "../errors/appError.error";


export const ensureCategoryDontExist = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void>=> {
    const categoryRepo: Repository<Category> = AppDataSource.getRepository(Category);

    const categoryName: string = req.body.name;

    const category: Category | null = await categoryRepo.findOne({
        where: {
            name: categoryName
        }
    });

    if(category){
        throw new AppError("Category already exists", 409)
    };

    return next();
}