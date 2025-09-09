import { Schema, model, models } from "mongoose";

type TodoData = {
  task: string;
};

// Schema
const todoSchema = new Schema<TodoData>({
  task: { type: String, required: true },
});

// Model
const TodoModel = models.Task || model<TodoData>("Task", todoSchema);

export default TodoModel;
