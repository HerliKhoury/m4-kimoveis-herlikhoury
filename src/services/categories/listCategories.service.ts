import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { TCategoryArr } from "../../interfaces/category.interfaces";
import { categorySchemaArr } from "../../schemas/category.schema";
import { Category } from "../../entities";

export const listCategoriesService = async (): Promise<TCategoryArr> => {
    const categoryRepo: Repository<Category> = AppDataSource.getRepository(Category);

    const categories: TCategoryArr | null = await categoryRepo.find();
    
    const categoriesValid: TCategoryArr = categorySchemaArr.parse(categories);

    return categoriesValid;
};