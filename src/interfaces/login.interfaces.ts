import { z } from "zod";
import { loginRequestSchema } from "../schemas/login.schema";


export type TLoginRequest = z.infer<typeof loginRequestSchema>;