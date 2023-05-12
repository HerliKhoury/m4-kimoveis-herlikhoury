import { Repository } from "typeorm";
import { Schedule } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError.error";


export const listAllSchedulesByRealEstateService = async (realEstateId: number): Promise<Schedule> => {
    const scheduleRepo: Repository<Schedule> = AppDataSource.getRepository(Schedule);

    const scheduleArr: Schedule | null = await scheduleRepo.findOne({
        where: {
            id: realEstateId
        },
        relations:{
            realEstate: true
        }
    });

    if(!scheduleArr){
        throw new AppError("No schedules found", 404);
    }

    return scheduleArr;
}