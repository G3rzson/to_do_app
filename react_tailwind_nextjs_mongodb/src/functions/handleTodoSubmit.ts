import { TodoFormData } from "@/validation/todoForm";
import { createTodo } from "@/actions/createTodo";
import { updateTodo } from "@/actions/updateTodo";
import { Dispatch, SetStateAction } from "react";
import { Todo } from "@/types/types";

type SubmitProps = {
  data: TodoFormData;
  editTodo?: Todo | null;
  setInfo: Dispatch<SetStateAction<string | null>>;
  setErrorMsg: Dispatch<SetStateAction<string | null>>;
  setEditTodo: React.Dispatch<React.SetStateAction<Todo | null>>;
};

export async function handleTodoSubmit({
  data,
  editTodo,
  setInfo,
  setErrorMsg,
  setEditTodo,
}: SubmitProps) {
  try {
    if (editTodo) {
      const result = await updateTodo({ id: editTodo._id, task: data.task });
      if (result.error) setErrorMsg(result.error);
      else setInfo(result.message!);
      setEditTodo(null);
    } else {
      const result = await createTodo(data);
      if (result.error) setErrorMsg(result.error);
      else setInfo(result.message!);
    }
  } catch (error) {
    if (error instanceof Error) {
      //console.log(error.message);
      setErrorMsg(error.message);
    }
  }
}
