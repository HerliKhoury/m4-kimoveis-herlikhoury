import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { TRealEstateArr } from "../../interfaces/realEstate.interfaces";
import { RealEstate } from "../../entities";


export const listRealEstatesService = async (): Promise<RealEstate[]> =>{
    const realEstateRepo: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);

    const realEstates: RealEstate[] | null = await realEstateRepo.find();

    return realEstates;
};