import TodoForm from "../Components/Form/TodoForm";
import PageTitle from "../Components/PageTitle/PageTitle";

export default function AddTodo() {
  return (
    <div className="flex justify-center items-center flex-col ">
      <PageTitle>Teendő hozzáadása</PageTitle>
      <TodoForm />
    </div>
  );
}
