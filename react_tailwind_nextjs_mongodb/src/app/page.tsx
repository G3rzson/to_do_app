import TodoForm from "@/components/Form/TodoForm";
import Info from "@/components/Info/Info";
import PageTitle from "@/components/PageTitle/PageTitle";
import TodoList from "@/components/TodoList/TodoList";

export default function Home() {
  return (
    <>
      <PageTitle />
      <TodoForm />
      <TodoList />
      <Info />
    </>
  );
}
