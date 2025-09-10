import z from "zod";

export const todoFormSchema = z.object({
  task: z
    .string()
    .nonempty("Tennivaló megadása kötelező!")
    .max(30, { message: "Túl hosszú tennivaló!" })
    .trim(),
});

export type TodoFormData = z.infer<typeof todoFormSchema>;
