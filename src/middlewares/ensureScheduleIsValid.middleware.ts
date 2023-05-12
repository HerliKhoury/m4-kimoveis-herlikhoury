import { NextFunction, Request, Response } from "express";
import { TScheduleReq } from "../interfaces/schedules.interfaces";
import { AppDataSource } from "../data-source";
import { Schedule } from "../entities";
import { AppError } from "../errors/appError.error";

export const ensureScheduleIsValid = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const scheduleData: TScheduleReq = req.body;
  const userId: string = res.locals.userId;

  const schedulesRepo = AppDataSource.getRepository(Schedule);

  const builderHourSchedule: Schedule | null = await schedulesRepo
  .createQueryBuilder("appoint_schedule")
  .where("appoint_schedule.date = :date", {
    date: scheduleData.date
  })
  .andWhere("appoint_schedule.realEstate = :estate", {
    estate: scheduleData.realEstateId
  })
  .andWhere("appoint_schedule.hour = :hour", {
    hour: scheduleData.hour
  }).getOne();

  if(builderHourSchedule){
    throw new AppError(
      "Schedule to this real estate at this date and time already exists",
      409
    );
  }

  const builderUserSchedule: Schedule | null = await schedulesRepo
  .createQueryBuilder("appoint_schedule")
  .where("appoint_schedule.date = :date", {
    date: scheduleData.date,
  })
  .andWhere("appoint_schedule.hour = :hour", {
    hour: scheduleData.hour,
  })
  .andWhere("appoint_schedule.userId = :id", { id: userId }).getOne();

  if(builderUserSchedule){
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
    );
  };

  const builderRealEstateUserSchedule: Schedule | null = await schedulesRepo
  .createQueryBuilder("appoint_schedule")
  .where("appoint_schedule.userId = :id", {
    id: userId,
  })
  .andWhere("appoint_schedule.realEstate = :estate", {
    estate: scheduleData.realEstateId,
  })
  .getOne();

  if(builderRealEstateUserSchedule){
    throw new AppError("User schedule to this real estate already exists", 409);
  };

  const [hours] = scheduleData.hour.split(":");
  if (Number(hours) < 8 || Number(hours) > 18) {
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
  };
  
  const businessDay: Date = new Date(scheduleData.date);

  const catchDay: number = businessDay.getDay();

  businessDay.getHours();

  if (catchDay === 0 || catchDay === 6) {
    throw new AppError("Invalid date, work days are monday to friday", 400);
  }
  
  return next();  
};