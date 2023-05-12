import { z } from "zod";
import { scheduleSchemaReq } from "../schemas/schedule.schema";


export type TScheduleReq = z.infer<typeof scheduleSchemaReq>;