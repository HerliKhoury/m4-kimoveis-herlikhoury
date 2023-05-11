import { Response } from "express";
import { TUserReqUpdate, TUserRes } from "../../interfaces/user.interfaces";
import { AppError } from "../../errors/appError.error";
import { Repository } from "typeorm";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { userReqUpdateSchema, userResSchema } from "../../schemas/user.schema";


export const updateUserService = async (
    userId: number, 
    userData: TUserReqUpdate, 
    res: Response
    ): Promise<TUserRes> => {
    const isAdm: boolean = res.locals.admin;
    const loggedId: number = res.locals.userId;
    const userRepo: Repository<User> = AppDataSource.getRepository(User);

    console.log(userData);
    /* const validatedBody = userReqUpdateSchema.parse(userData);
    console.log(validatedBody); */
    

    const oldUserData: User | null = await userRepo.findOneBy({
        id: userId
    });

    if(!oldUserData){
        throw new AppError("User not found", 404);
    }

    console.log(isAdm);
    console.log(userId);
    console.log(loggedId);

    if(isAdm || userId == loggedId){

        const newUserData: User = userRepo.create({
            ...oldUserData,
            ...userData
        });

        await userRepo.save(newUserData);

        const returnUser: TUserRes = userResSchema.parse(newUserData);

        return returnUser;

    }else{
        throw new AppError("Insufficient permission", 403);
    }
}