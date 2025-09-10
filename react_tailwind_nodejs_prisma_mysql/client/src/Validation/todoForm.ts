import z from "zod";

export const todoFormSchema = z.object({
  task: z
    .string()
    .nonempty("Tennivaló megadása kötelező!")
    .max(30, { message: "Teendő max 30 karakter lehet!" })
    .trim(),
});

export type TodoFormData = z.infer<typeof todoFormSchema>;
