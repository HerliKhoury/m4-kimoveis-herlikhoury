import { z } from "zod";
import { realEstateReturnAll } from "./realEstate.schema";
import { userResSchema } from "./user.schema";

export const scheduleSchemaReq = z.object({
    date: z.string(),
    hour: z.string(),
    realEstateId: z.number()
});

export const scheduleSchemaRes = scheduleSchemaReq.extend({
    id: z.number(),
    userId: z.number(),
});

export const scheduleSchemaAll = scheduleSchemaRes.extend({
    realEstate: realEstateReturnAll,
    user: userResSchema
}).omit({
    realEstateId: true
})