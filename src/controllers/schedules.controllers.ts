import { Request, Response } from "express";
import { listAllSchedulesByRealEstateService } from "../services/schedules/listAllSchedulesByRealEstate.service";
import { TScheduleReq } from "../interfaces/schedules.interfaces";
import { createScheduleService } from "../services/schedules/createSchedule.service";
import { TRealEstateReturn } from "../interfaces/realEstate.interfaces";

export const createSchedulesController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const userId: number = parseInt(res.locals.userId);
    const scheduleData: TScheduleReq = req.body;
    const newSchedule = await createScheduleService(scheduleData, userId);
  
    return res.status(201).json(newSchedule);
};

export const listAllSchedulesController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const realEstateId: number = parseInt(req.params.id);

    const schedulesByRealEstate: TRealEstateReturn = await listAllSchedulesByRealEstateService(realEstateId);

    return res.json(schedulesByRealEstate);
}