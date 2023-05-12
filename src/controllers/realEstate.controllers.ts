import { Request, Response } from "express";
import { createRealEstateService } from "../services/realState/createRealEstate.service";
import { TRealEstate, TRealEstateReq } from "../interfaces/realEstate.interfaces";
import { listRealEstatesService } from "../services/realState/listRealEstates.service";
import { RealEstate } from "../entities";


export const createRealEstateController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const newRealEstateData: TRealEstateReq = req.body;

    const newRealEstate: TRealEstate = await createRealEstateService(newRealEstateData);

    return res.status(201).json(newRealEstate);
};

export const listAllRealEstatesController = async(
    req: Request,
    res: Response
): Promise<Response> => {

    const realEstatesList: RealEstate[] = await listRealEstatesService();

    return res.status(200).json(realEstatesList);
};