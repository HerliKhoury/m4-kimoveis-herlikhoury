import { Request, Response } from "express";
import { TCategory, TCategoryArr, TCategoryReq } from "../interfaces/category.interfaces";
import { listCategoriesService } from "../services/categories/listCategories.service";
import { createCategoryService } from "../services/categories/createCategory.service";

export const listAllCategories = async(
    req: Request,
    res: Response
): Promise<Response> => {

    const categoryList: TCategoryArr = await listCategoriesService();

    return res.status(200).json(categoryList);
};

export const createCategory = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const newCategoryData: TCategoryReq = req.body;

    const newCategory: TCategory = await createCategoryService(newCategoryData);

    return res.status(201).json(newCategory);
};