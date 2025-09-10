import type { UseFormRegister } from "react-hook-form";
import { useGlobalContext } from "../../../Hooks/useGlobalContext";
import { useEffect, useRef } from "react";

type Props = {
  register: UseFormRegister<{
    task: string;
  }>;
  autoFocus: boolean;
};

export default function InputField({ register, autoFocus }: Props) {
  const { editTodo } = useGlobalContext();

  const inputRef = useRef<HTMLInputElement | null>(null);
  const reg = register("task");
  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  return (
    <div className="form-floating">
      <input
        {...register("task")}
        type="text"
        id="todo"
        className="form-control"
        placeholder="Tennivaló..."
        ref={(e) => {
          reg.ref(e);
          inputRef.current = e;
        }}
      />
      <label htmlFor="todo">
        Tennivaló {editTodo ? "szerkesztése..." : "hozzáadása..."}
      </label>
    </div>
  );
}
