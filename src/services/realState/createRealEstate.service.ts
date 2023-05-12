import { Repository } from "typeorm";
import { TRealEstate, TRealEstateReturn } from "../../interfaces/realEstate.interfaces";
import { AppDataSource } from "../../data-source";
import { Category, RealEstate, Address } from "../../entities";
import { AppError } from "../../errors/appError.error";
import { realEstateReturnSchema } from "../../schemas/realEstate.schema";



export const createRealEstateService = async (
    newRealEstateData: TRealEstate
): Promise<TRealEstateReturn> => {
    const addressRepo: Repository<Address> = AppDataSource.getRepository(Address);

    const address: Address = addressRepo.create(newRealEstateData.address);

    const addressFound = await addressRepo.findOneBy({
        street: String(address.street),
        number: String(address.number),
    });

    if (addressFound) {
        throw new AppError("Address already exists", 409);
    }

    await addressRepo.save(address);

    const categoryRepo: Repository<Category> = AppDataSource.getRepository(Category);

    const categoryFound = await categoryRepo.findOneBy({
        id: Number(newRealEstateData.categoryId),
    });

    if (!categoryFound) {
        throw new AppError("Category not found", 404);
    }

    const realEstateRepo: Repository<RealEstate> = 
    AppDataSource.getRepository(RealEstate);
    
    const realEstate = realEstateRepo.create({
        ...newRealEstateData,
        address,
        category: categoryFound,
    });

    await realEstateRepo.save(realEstate);

    const newRealEstate = realEstateReturnSchema.parse(realEstate);

    return newRealEstate;
};