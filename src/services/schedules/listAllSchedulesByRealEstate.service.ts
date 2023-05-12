import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError.error";
import { TRealEstateReturn } from "../../interfaces/realEstate.interfaces";
import { RealEstate } from "../../entities";


export const listAllSchedulesByRealEstateService = async (realEstateId: number): Promise<TRealEstateReturn> => {
    const realEstateRepo: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);

    const realEstateFound: RealEstate | null = await realEstateRepo.findOne({
        where: {
        id: realEstateId,
        },
        relations: {
        address: true,
        category: true,
        schedules: {
            user: true,
        },
        },
    });

    if (!realEstateFound) {
        throw new AppError("RealEstate not found", 404);
    }

    return realEstateFound;
}