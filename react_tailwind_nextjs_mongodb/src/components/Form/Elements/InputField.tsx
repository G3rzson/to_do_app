import type { UseFormRegister } from "react-hook-form";
import { useEffect, useRef } from "react";

type Props = {
  register: UseFormRegister<{
    task: string;
  }>;
  autoFocus: boolean;
};

export default function InputField({ register, autoFocus }: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const reg = register("task");
  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  return (
    <input
      {...register("task")}
      className="bg-white text-zinc-900 pl-2 h-10 w-full"
      type="text"
      id="task"
      placeholder="Tennivaló..."
      ref={(e) => {
        reg.ref(e);
        inputRef.current = e;
      }}
    />
  );
}
