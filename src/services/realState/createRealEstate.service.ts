import { Repository } from "typeorm";
import { TRealEstate, TRealEstateReq } from "../../interfaces/realEstate.interfaces";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";



export const createRealEstateService = async (newRealEstateData: TRealEstateReq): Promise<TRealEstate> => {
    const realEstateRepo: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);

    const newRealEstate: TRealEstate = realEstateRepo.create(newRealEstateData);

    await realEstateRepo.save(newRealEstate);

    return newRealEstate;
};