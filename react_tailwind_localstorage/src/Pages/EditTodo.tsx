import TodoForm from "../Components/Form/TodoForm";
import PageTitle from "../Components/PageTitle/PageTitle";

export default function EditTodo() {
  return (
    <div className="flex justify-center items-center flex-col ">
      <PageTitle>Teendő szerkesztése</PageTitle>
      <TodoForm />
    </div>
  );
}
