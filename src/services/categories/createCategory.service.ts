import { Repository } from "typeorm";
import { TCategory, TCategoryReq } from "../../interfaces/category.interfaces";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { categorySchema } from "../../schemas/category.schema";


export const createCategoryService = async (newCategoryData: TCategoryReq): Promise<TCategory> => {
    const categoryRepo: Repository<Category> = AppDataSource.getRepository(Category);

    const newCategory: TCategory = categoryRepo.create(newCategoryData);

    await categoryRepo.save(newCategory);

    const validCategory: TCategory = categorySchema.parse(newCategory);

    return validCategory;
};