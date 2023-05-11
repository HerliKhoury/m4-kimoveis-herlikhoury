import { Response } from "express";
import { TUserReqUpdate, TUserRes } from "../../interfaces/user.interfaces";
import { AppError } from "../../errors/appError.error";
import { Repository } from "typeorm";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { userResSchema } from "../../schemas/user.schema";


export const updateUserService = async (
    userId: number, 
    userData: TUserReqUpdate, 
    res: Response
    ): Promise<TUserRes> => {
    const isAdm: boolean = res.locals.admin;
    const loggedId: number = res.locals.userId;
    const userRepo: Repository<User> = AppDataSource.getRepository(User);

    if(isAdm || userId === loggedId){
        const oldUserData: User | null = await userRepo.findOneBy({
            id: userId
        });

        const newUserData: User = userRepo.create({
            ...oldUserData,
            ...userData
        });

        await userRepo.save(newUserData);

        const returnUser: TUserRes = userResSchema.parse(newUserData);

        return returnUser;

    }else{
        throw new AppError("Insufficient Permission", 403);
    }
}