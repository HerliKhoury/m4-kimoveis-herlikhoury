import { z } from "zod";

export const userSchema = z.object({
    id: z.number().int().positive(),
    name: z.string().max(45).nonempty(),
    email: z.string().email().max(45).nonempty(),
    admin: z.boolean(),
    password: z.string().max(120).nonempty(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.union([z.date(), z.null(), z.undefined()]).optional()
});

export const userResSchema = userSchema.omit({ password: true });

export const userReqSchema = z.object({
    name: z.string().max(45).nonempty(),
    email: z.string().email().max(45).nonempty(),
    password: z.string().max(120).nonempty(),
    admin: z.boolean().optional().default(false)
});

