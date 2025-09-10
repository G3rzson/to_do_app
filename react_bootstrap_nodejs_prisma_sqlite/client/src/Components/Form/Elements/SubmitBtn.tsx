import { useGlobalContext } from "../../../Hooks/useGlobalContext";

export default function SubmitBtn({ isSubmitting }: { isSubmitting: boolean }) {
  const { editTodo } = useGlobalContext();
  return (
    <button className="btn btn-success" type="submit" disabled={isSubmitting}>
      <img
        src={editTodo ? "/assets/check.svg" : "/assets/plus.svg"}
        style={{ width: "24px", height: "24px" }}
        alt={editTodo ? "check icon" : "plus icon"}
      />
    </button>
  );
}
