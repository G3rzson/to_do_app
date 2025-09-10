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
        <span
          className="text-danger"
          style={{ position: "absolute", bottom: "-1.5rem" }}
        >
          {errors.task.message}
        </span>
      )}
    </>
  );
}
