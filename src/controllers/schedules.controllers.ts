import { Request, Response } from "express";
import { Schedule } from "../entities";
import { listAllSchedulesByRealEstateService } from "../services/schedules/listAllSchedulesByRealEstate.service";


export const listAllSchedulesController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const realEstateId: number = parseInt(req.params.id);

    const schedulesByRealEstate: Schedule = await listAllSchedulesByRealEstateService(realEstateId);

    return res.status(200).json(schedulesByRealEstate);
}