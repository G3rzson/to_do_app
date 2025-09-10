import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { createTodo } from "./functions/createTodo";
import { getTodos } from "./functions/getTodos";
import { deleteTodo } from "./functions/deleteTodo";
import { updateTodo } from "./functions/updateTodo";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.get("/todo/get-todos", getTodos);
app.post("/todo/create", createTodo);
app.delete("/todo/delete/:id", deleteTodo);
app.put("/todo/update/:id", updateTodo);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
