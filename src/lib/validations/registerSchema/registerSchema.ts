import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(2, { message: "Name has to be at leats 2  characters" }),
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(6, { message: "Password too short, 6 characters minimum" }),
});

export type RegisterFormData = z.infer<typeof registerSchema>;
