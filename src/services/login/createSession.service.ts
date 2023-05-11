import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { TLoginRequest } from "../../interfaces/login.interfaces";
import { AppError } from "../../errors/appError.error";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";

export const createSessionService = async (
    loginData: TLoginRequest
): Promise<string> => {
    const userRepo: Repository<User> = AppDataSource.getRepository(User);

    const user: User | null = await userRepo.findOne({
        where: {
            email: loginData.email
        },
    });

    if (!user) {
        throw new AppError("Wrong email/password", 401);
    };

    const passwordMatch = await compare(loginData.password, user.password);

    if (!passwordMatch) {
        throw new AppError('Wrong email/password', 401)
    };

    const token: string = jwt.sign(
        {
            admin: user.admin,
            userId: user.admin
        },
        process.env.SECRET_KEY!,
        {
            expiresIn: "1d",
            subject: user.id.toString()
        }
    );

    return token;
};