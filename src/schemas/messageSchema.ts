import { z } from "zod/v4";

export const messageSchema = z.object({
    content: z
        .string()
        .min(10, {message: 'Content must be at least of 10 characters'})
        .max(300, {message: 'Content must be at max of 300 characters'})
})