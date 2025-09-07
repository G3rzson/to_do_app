import PageTitle from "../Components/PageTitle/PageTitle";
import TodoArray from "../Components/TodoList/TodoArray";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col">
      <PageTitle>Teendők</PageTitle>
      <TodoArray />
    </div>
  );
}
