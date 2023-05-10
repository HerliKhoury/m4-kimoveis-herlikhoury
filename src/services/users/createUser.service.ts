import { Repository } from "typeorm";
import { User } from "../../entities";
import { TUser, TUserReq, TUserRes } from "../../interfaces/user.interfaces";
import { AppDataSource } from "../../data-source";
import { userResSchema } from "../../schemas/user.schema";

export const createUserService = async (newUserData: TUserReq): Promise<TUserRes> => {
    const userRepo: Repository<User> = AppDataSource.getRepository(User);

    const newUser: TUser = userRepo.create(newUserData);

    await userRepo.save(newUser)

    const validUser: TUserRes = userResSchema.parse(newUser)

    return validUser;
};