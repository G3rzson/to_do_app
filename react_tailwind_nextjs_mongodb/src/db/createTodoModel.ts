import { TodoFormData } from "@/validation/todoForm";
import { Schema, model, models } from "mongoose";

// Schema
const todoFormSchema = new Schema<TodoFormData>({
  task: { type: String, required: true },
});

const TodoModel = models.Task || model<TodoFormData>("Task", todoFormSchema);

export default TodoModel;
