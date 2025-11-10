import { z } from "zod";

export const catZodSchema = z.object({
  name: z.string().min(1, "Enter a valid name"),
  age: z
    .number()
    .positive("Must be a positive")
    .max(20, "Mostly cat does lives 13-20 years."),
});

export type Cat = z.infer<typeof catZodSchema>;

export type Cats = Cat[];
