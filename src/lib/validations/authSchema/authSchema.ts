import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Email invalid" }),
  password: z
    .string()
    .min(8, { message: "Password too short.Min 8 charakters" }),
});

export type LoginFormData = z.infer<typeof loginSchema>;
