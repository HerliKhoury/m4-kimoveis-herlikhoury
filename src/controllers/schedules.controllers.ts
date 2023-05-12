import { Request, Response } from "express";
import { Schedule } from "../entities";
import { listAllSchedulesByRealEstateService } from "../services/schedules/listAllSchedulesByRealEstate.service";
import { TScheduleReq } from "../interfaces/schedules.interfaces";
import { createScheduleService } from "../services/schedules/createSchedule.service";

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

    const schedulesByRealEstate: Schedule = await listAllSchedulesByRealEstateService(realEstateId);

    return res.status(200).json(schedulesByRealEstate);
}