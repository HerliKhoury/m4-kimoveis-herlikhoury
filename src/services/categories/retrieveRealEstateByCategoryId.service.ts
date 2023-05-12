import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Category, RealEstate } from "../../entities";
import { AppError } from "../../errors/appError.error";


export const retrieveRealEstateByCategoryIdService = async (categoryId: number): Promise<Category> => {
    const categoryRepo: Repository<Category> = AppDataSource.getRepository(Category);

    const realEstateArr: Category | null = await categoryRepo.findOne({
        where: {
            id: categoryId
        },
        relations:{
            realEstate: true
        }
    });

    if(!realEstateArr){
        throw new AppError("Category not found", 404);
    }

    return realEstateArr;
}