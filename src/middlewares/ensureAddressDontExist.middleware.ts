import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { RealEstate } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors/appError.error";


export const ensureAddressDontExist = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void>=> {
    const realEstateRepo: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);

    const realEstateAddress: number = req.body.addressId;

    const realEstate: RealEstate | null = await realEstateRepo.findOne({
        where: {
            addressId: realEstateAddress
        }
    });

    if(realEstate){
        throw new AppError("Address already in use", 409)
    };

    return next();
}