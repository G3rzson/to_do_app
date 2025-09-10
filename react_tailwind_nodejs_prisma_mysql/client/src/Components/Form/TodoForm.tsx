import { useForm } from "react-hook-form";
import { todoFormSchema, type TodoFormData } from "../../Validation/todoForm";
import Btn from "./Elements/Btn";
import InputField from "./Elements/InputField";
import { zodResolver } from "@hookform/resolvers/zod";
import createTodo from "../../Functions/createTodo";
import { useGlobalContext } from "../../Hooks/useGlobalContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import updateTodo from "../../Functions/updateTodo";

export default function TodoForm() {
  const { setErrorMsg, setInfo, editTodo, setEditTodo, setLoading } =
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
    //console.log(data);
    try {
      if (editTodo) {
        // szerkesztés
        updateTodo(
          editTodo.id,
          data,
          setLoading,
          setInfo,
          setErrorMsg,
          setEditTodo
        );
      } else {
        // új létrehozás
        createTodo(data, setLoading, setInfo, setErrorMsg);
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
