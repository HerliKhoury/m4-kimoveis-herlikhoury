import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";


export const listRealEstatesService = async (): Promise<RealEstate[]> =>{
    const realEstateRepo: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);

    const foundRealEstate = await realEstateRepo.find({
        relations: {
          address: true,
        },
    });

    return foundRealEstate;
};