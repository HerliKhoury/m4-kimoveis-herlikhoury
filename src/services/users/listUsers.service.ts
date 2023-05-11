import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { TUserArr, TUserArrRes } from "../../interfaces/user.interfaces";
import { userSchemaArrRes } from "../../schemas/user.schema";

export const listUsersService = async (): Promise<TUserArrRes> =>{
    const userRepo: Repository<User> = AppDataSource.getRepository(User);

    const users: TUserArr | null = await userRepo.find();
    
    const usersValid: TUserArrRes = userSchemaArrRes.parse(users);

    return usersValid;
};