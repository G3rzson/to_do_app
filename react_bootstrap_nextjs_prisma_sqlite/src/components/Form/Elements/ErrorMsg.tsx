import type { FieldErrors } from "react-hook-form";

type ErrorMsgProps = {
  errors: FieldErrors<{
    task: string;
  }>;
};

export default function ErrorMsg({ errors }: ErrorMsgProps) {
  return (
    <>
      {errors.task && (
        <span className="text-danger">{errors.task.message}</span>
      )}
    </>
  );
}
