import { useForm } from "react-hook-form";
import { todoFormSchema, type TodoFormData } from "../../Validation/todoForm";
import Btn from "./Elements/Btn";
import InputField from "./Elements/InputField";
import { zodResolver } from "@hookform/resolvers/zod";
import saveTodo from "../../Functions/saveTodo";
import createTodo from "../../Functions/createTodo";
import { useGlobalContext } from "../../Hooks/useGlobalContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function TodoForm() {
  const { todos, setTodos, setErrorMsg, setInfo, editTodo, setEditTodo } =
    useGlobalContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TodoFormData>({
    resolver: zodResolver(todoFormSchema),
  });

  const navigate = useNavigate();

  useEffect(() => {
    reset(editTodo ? { task: editTodo.task ?? "" } : { task: "" });
  }, [editTodo, reset]);

  function onSubmit(data: TodoFormData) {
    try {
      if (editTodo) {
        // szerkesztés
        const updatedTodos = todos.map((t) =>
          t.id === editTodo.id ? { ...t, task: data.task } : t
        );
        setTodos(updatedTodos);
        saveTodo(updatedTodos);
        setInfo("Sikeres módosítás!");
        setEditTodo(null);
      } else {
        // új létrehozás
        const newTodo = createTodo(data);
        const updatedTodos = [newTodo, ...todos];
        setTodos(updatedTodos);
        saveTodo(updatedTodos);
        setInfo("Sikeres hozzáadás!");
      }
    } catch (error) {
      if (error instanceof Error) {
        setErrorMsg(error.message);
      }
    } finally {
      reset();
      navigate("/");
    }
  }

  return (
    <form className="form mt-10" onSubmit={handleSubmit(onSubmit)}>
      <InputField<TodoFormData>
        name="task"
        label="Tennivaló"
        type="text"
        register={register}
        errors={errors}
        autoFocus={!!editTodo}
      />
      <Btn isSubmitting={isSubmitting}>
        {editTodo ? "Módosítás" : "Létrehozás"}
      </Btn>
    </form>
  );
}
