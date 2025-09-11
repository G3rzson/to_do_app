import type { FieldErrors } from "react-hook-form";

type ErrorMsgProps = {
  errors: FieldErrors<{
    task: string;
  }>;
};

export default function ZodError({ errors }: ErrorMsgProps) {
  return (
    <>
      {errors.task && (
        <span className="text-amber-400 text-sm">{errors.task.message}</span>
      )}
    </>
  );
}
