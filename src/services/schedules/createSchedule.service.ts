import { Repository } from "typeorm";
import { TScheduleReq } from "../../interfaces/schedules.interfaces";
import { AppDataSource } from "../../data-source";
import { RealEstate, Schedule, User } from "../../entities";
import { AppError } from "../../errors/appError.error";


export const createScheduleService = async (
    scheduleData: TScheduleReq,
    userId: number
): Promise<{message: string}> => {
    const realEstateRepo: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);
    const scheduleRepo: Repository<Schedule> = AppDataSource.getRepository(Schedule);
    const userRepo: Repository<User> = AppDataSource.getRepository(User);

    let catchRealEstate: RealEstate | null;

    if (scheduleData.realEstateId) {
        catchRealEstate = await realEstateRepo.findOneBy({
            id: Number(scheduleData.realEstateId),
        });

        if (!catchRealEstate) throw new AppError("RealEstate not found", 404);  
    }

    const catchUser: User | null = await userRepo.findOneBy({
        id: Number(userId)
    });

    if (!catchUser) throw new AppError("User not found", 404);

    const createScheduleRepo: Schedule = scheduleRepo.create({
        ...scheduleData,
        realEstate: catchRealEstate!,
        user: catchUser!,
    });
    
    await scheduleRepo.save(createScheduleRepo);

    return { message: "Schedule created"};
};