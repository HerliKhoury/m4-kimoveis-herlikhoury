import { Request, Response } from "express";
import { TCategoryArr } from "../interfaces/category.interfaces";
import { listCategoriesService } from "../services/categories/listCategories.service";

export const listAllCategories = async(
    req: Request,
    res: Response
): Promise<Response> => {

    const categoryList: TCategoryArr = await listCategoriesService();

    return res.status(200).json(categoryList);
};