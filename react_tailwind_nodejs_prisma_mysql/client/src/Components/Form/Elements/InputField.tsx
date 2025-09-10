import { useRef, useEffect } from "react";
import type {
  FieldErrors,
  UseFormRegister,
  FieldValues,
  Path,
} from "react-hook-form";

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  type?: string;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  autoFocus?: boolean;
};

export default function InputField<T extends FieldValues>({
  name,
  label,
  type = "text",
  register,
  errors,
  autoFocus = false,
}: Props<T>) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const reg = register(name);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  return (
    <div className="formField">
      <label htmlFor={name} className="formLabel">
        {label}
      </label>
      <input
        {...reg}
        className="formInput"
        id={name}
        type={type}
        ref={(e) => {
          reg.ref(e);
          inputRef.current = e;
        }}
      />
      {errors[name]?.message && (
        <span className="errorMsg">{String(errors[name]?.message)}</span>
      )}
    </div>
  );
}
