import { z } from "zod";
import { scheduleSchemaReq } from "../schemas/schedule.schema";


type TScheduleReq = z.infer<typeof scheduleSchemaReq>;